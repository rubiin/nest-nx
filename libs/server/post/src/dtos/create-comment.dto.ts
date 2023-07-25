import { IsStringField } from "@nestify/server/util/nest-framework/validators";


export class CreateCommentDto {
	/**
	 * Content of comment
	 * @example "This is a comment"
	 */

	@IsStringField()
	body!: string;
}
