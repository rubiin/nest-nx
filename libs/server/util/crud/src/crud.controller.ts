import { EntityData, RequiredEntityData } from "@mikro-orm/core";
import {
	ApiPaginatedResponse,
	LoggedInUser,
	SwaggerResponse,
} from "@nestify/server/util/nest-framework/decorators";
import { AppUtils } from "@nestify/server/util/nest-framework/helpers";
import { PaginationRequest, PaginationResponse } from "@nestify/server/util/nest-framework/pagination";
import {
	BaseEntity,
	User,
} from "@nestify/server/util/types";
import {
	ArgumentMetadata,
	Body,
	Delete,
	Get,
	Injectable,
	Param,
	Post,
	Put,
	Query,
	Type,
	UsePipes,
	ValidationPipe,
} from "@nestjs/common";
import { Observable } from "rxjs";

import { Crud } from "./crud.interface";
import { BaseService } from "./crud.service";

@Injectable()
export class AbstractValidationPipe extends ValidationPipe {
	constructor(private readonly targetTypes: { body?: Type; query?: Type; param?: Type }) {
		super(AppUtils.validationPipeOptions());
	}

	async transform(value: any, metadata: ArgumentMetadata) {
		const targetType = this.targetTypes[metadata.type];

		if (!targetType) {
			return super.transform(value, metadata);
		}

		return super.transform(value, { ...metadata, metatype: targetType });
	}
}

export function ControllerFactory<
	T extends BaseEntity,
	Q extends PaginationRequest,
	C extends RequiredEntityData<T>,
	U extends EntityData<T>,
>(queryDto: Type<Q>, createDto: Type<C>, updateDto: Type<U>): Type<Crud<T, Q, C, U>> {
	const createPipe = new AbstractValidationPipe({
		body: createDto,
	});
	const updatePipe = new AbstractValidationPipe({
		body: updateDto,
	});

	const queryPipe = new AbstractValidationPipe({ query: queryDto });

	class CrudController<
		T extends BaseEntity,
		Q extends PaginationRequest,
		C extends RequiredEntityData<T>,
		U extends EntityData<T>,
	> implements Crud<T, Q, C, U>
	{
		protected service: BaseService<T, Q, C, U>;

		@Get(":idx")
		@SwaggerResponse({
			operation: "Find item",
			badRequest: "Item does not exist.",
			params: ["idx"],
		})
		findOne(@Param("idx") index: string): Observable<T> {
			return this.service.findOne(index);
		}

		@ApiPaginatedResponse(updateDto)
		@UsePipes(queryPipe)
		@Get()
		findAll(@Query() query: Q): Observable<PaginationResponse<T>> {
			return this.service.findAll(query);
		}

		@SwaggerResponse({
			operation: "Create item",
			badRequest: "Item already exists.",
			body: createDto,
			response: updateDto,
		})
		@UsePipes(createPipe)
		@Post()
		create(@Body() body: C, @LoggedInUser() user?: User): Observable<T> {
			return this.service.create(body, user);
		}

		@SwaggerResponse({
			operation: "Item update",
			badRequest: "Item does not exist.",
			params: ["idx"],
			body: updateDto,
			response: updateDto,
		})
		@UsePipes(updatePipe)
		@Put(":idx")
		update(@Param("idx") index: string, @Body() body: U): Observable<T> {
			return this.service.update(index, body);
		}

		@SwaggerResponse({
			operation: "Item delete",
			badRequest: "Item does not exist.",
			params: ["idx"],
			response: updateDto,
		})
		@Delete(":idx")
		remove(@Param("idx") index: string): Observable<T> {
			return this.service.remove(index);
		}
	}

	return CrudController;
}
