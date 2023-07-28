import {
	ApiFile,
	ApiPaginatedResponse,
	GenericController,
	Public,
	SwaggerResponse,
	UUIDParam,
} from "@nestify/server/util/nest-framework/decorators";
import { fileValidatorPipe } from "@nestify/server/util/nest-framework/pipes";
import {
	CursorPaginationDto,
	File,
	PaginationResponse,
	Roles,
	User,
} from "@nestify/server/util/types";
import { Body, Delete, Get, Post, Put, Query, UploadedFile } from "@nestjs/common";
import { Observable } from "rxjs";

import { CreateUserDto, EditUserDto, UserRegistrationDto } from "./dtos";
import { UserService } from "./user.service";

// TODO: add CASL

@GenericController("users")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Public()
	@ApiPaginatedResponse(User)
	@Get()
	findAll(@Query() PaginationDto: CursorPaginationDto): Observable<PaginationResponse<User>> {
		return this.userService.findAll(PaginationDto);
	}

	@Public()
	@Post("register")
	@SwaggerResponse({
		operation: "Create user",
		badRequest: "User already registered with email.",
	})
	@ApiFile({ fieldName: "avatar", required: true }) // fix this
	publicRegistration(
		@Body() dto: UserRegistrationDto,
		@UploadedFile(fileValidatorPipe({}))
		image: File,
	): Observable<User> {
		return this.userService.create({
			...dto,
			roles: [Roles.AUTHOR],
			files: image,
		});
	}

	@Get(":idx")
	@SwaggerResponse({
		operation: "User fetch",
		notFound: "User does not exist.",
		params: ["idx"],
	})
	findOne(@UUIDParam("idx") index: string): Observable<User> {
		return this.userService.findOne(index);
	}

	@Post()
	@SwaggerResponse({
		operation: "User create",
		badRequest: "User already registered with email.",
	})
	@ApiFile({ fieldName: "avatar", required: true })
	create(
		@Body() dto: CreateUserDto,
		@UploadedFile(fileValidatorPipe({}))
		image: File,
	): Observable<User> {
		return this.userService.create({ ...dto, files: image });
	}

	@Put(":idx")
	@SwaggerResponse({
		operation: "User edit",
		badRequest: "User already registered with email.",
		notFound: "User does not exist.",
		params: ["idx"],
	})
	update(
		@UUIDParam("idx") index: string,
		@Body() dto: EditUserDto,
		@UploadedFile(fileValidatorPipe({ required: false })) image?: File,
	): Observable<User> {
		return this.userService.update(index, dto, image);
	}

	@Delete(":idx")
	@SwaggerResponse({
		operation: "User delete",
		notFound: "User does not exist.",
		params: ["idx"],
	})
	remove(@UUIDParam("idx") index: string): Observable<User> {
		return this.userService.remove(index);
	}
}
