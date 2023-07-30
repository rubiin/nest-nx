import { InjectRepository } from "@mikro-orm/nestjs";
import { BaseService } from "@nestify/server/util/crud";
import { OffsetPaginationDto } from "@nestify/server/util/nest-framework/pagination";
import { BaseRepository, Category } from "@nestify/server/util/orm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryService extends BaseService<Category, OffsetPaginationDto> {
	protected readonly queryName = "c"; // the name of the query used in the pagination
	protected readonly searchField = "name"; // the field to search for when searching for tags
	constructor(
		// @ts-expect-error: Unused import error
		@InjectRepository(Category) private categoryRepository: BaseRepository<Category>,
	) {
		super(categoryRepository);
	}
}
