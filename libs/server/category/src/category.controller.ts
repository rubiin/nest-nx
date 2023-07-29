import { ControllerFactory } from "@nestify/server/util/crud";
import { GenericController } from "@nestify/server/util/nest-framework/decorators";
import { OffsetPaginationDto } from "@nestify/server/util/nest-framework/pagination";
import { Category } from "@nestify/server/util/types";

import { CategoryService } from "./category.service";
import { CreateCategoryDto, EditCategoryDto } from "./dto";

@GenericController("categories", false)
export class CategoryController extends ControllerFactory<
	Category,
	OffsetPaginationDto,
	CreateCategoryDto,
	EditCategoryDto
>(OffsetPaginationDto, CreateCategoryDto, EditCategoryDto) {
	constructor(protected service: CategoryService) {
		super();
	}
}
