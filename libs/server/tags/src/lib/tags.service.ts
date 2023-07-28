import { InjectRepository } from "@mikro-orm/nestjs";
import { BaseService } from "@nestify/server/util/crud";
import { BaseRepository, CursorPaginationDto, Tag } from "@nestify/server/util/types";
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
