import { PaginationType } from "@nestify/server/util/common";
import { validationI18nMessage } from "@nestify/server/util/i18n";
import { IsNumberField, IsStringField } from "@nestify/server/util/nest-framework/validators";
import { ApiHideProperty } from "@nestjs/swagger";
import { Allow, IsBase64 } from "class-validator";

import { PaginationDto } from "./pagination.dto";

// TODO: add filters
4
export class CursorPaginationDto extends PaginationDto {
	@ApiHideProperty()
	@Allow()
	type: PaginationType.CURSOR = PaginationType.CURSOR;

	/**
	 * The cursor of the page you are requesting
	 */
	@IsStringField({ required: false })
	@IsBase64({
		message: validationI18nMessage("validation.isDataType", {
			type: "base64",
		}),
	})
	after?: string;

	/**
	 * Results page you want to retrieve (0..N)
	 */
	@IsNumberField({ required: false })
	first = 10;
}
