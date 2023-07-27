import { IsEnumField, IsNumberField, IsStringField } from "@nestify/server/util/nest-framework/validators";
import { ApiHideProperty } from "@nestjs/swagger";
import { Allow } from "class-validator";

import { PaginationType, QueryOrder } from "../enums";
import { PaginationDto } from "./pagination.dto";

export class OffsetPaginationDto extends PaginationDto {
	@ApiHideProperty()
	@Allow()
	type: PaginationType.OFFSET = PaginationType.OFFSET;

	/**
	 * Results page you want to retrieve (0..N)
	 */
	@IsNumberField({ required: false })
	readonly page = 1;

	/**
	 * Number of results per page
	 */
	@IsNumberField({ required: false, max: 50 })
	readonly limit = 10;

	/**
	 * Sorting order
	 */
	@IsEnumField(QueryOrder, { required: false })
	readonly order: QueryOrder = QueryOrder.DESC;

	/**
	 * Sorting criteria
	 */
	@IsStringField({ required: false, maxLength: 50 })
	readonly sort = "createdAt";

	get offset(): number {
		return (this.page - 1) * this.limit;
	}
}
