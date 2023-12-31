import { ControllerFactory } from "@nestify/server/util/crud";
import { GenericController } from "@nestify/server/util/nest-framework/decorators";
import { CursorPaginationDto } from "@nestify/server/util/nest-framework/pagination";
import { Tag } from "@nestify/server/util/orm";

import { CreateTagDto, EditTagDto } from "./dto";
import { TagsService } from "./tags.service";

@GenericController("tags")
export class TagsController extends ControllerFactory<
	Tag,
	CursorPaginationDto,
	CreateTagDto,
	EditTagDto
>(CursorPaginationDto, CreateTagDto, EditTagDto) {
	constructor(protected service: TagsService) {
		super();
	}
}
