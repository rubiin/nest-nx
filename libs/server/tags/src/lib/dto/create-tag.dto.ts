import { IsStringField } from "@nestify/server/util/nest-framework/validators";

export class CreateTagDto {
	/**
	 * Title of tag
	 * @example "Lorem ipsum"
	 */
	@IsStringField()
	title: string;

	/**
	 * Description of tag
	 * @example "Lorem ipsum"
	 */
	@IsStringField()
	description: string;
}
