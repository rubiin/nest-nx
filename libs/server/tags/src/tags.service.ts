import { InjectRepository } from "@mikro-orm/nestjs";
import { BaseService } from "@nestify/server/util/crud";
import { CursorPaginationDto } from "@nestify/server/util/nest-framework/pagination";
import { BaseRepository, Tag } from "@nestify/server/util/orm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TagsService extends BaseService<Tag, CursorPaginationDto> {
	protected readonly queryName = "t"; // the name of the query used in the pagination
	protected readonly searchField = "title"; // the field to search for when searching for tags
	constructor(
		// @ts-expect-error: Unused import error
		@InjectRepository(Tag) private tagRepository: BaseRepository<Tag>,
	) {
		super(tagRepository);
	}
}
