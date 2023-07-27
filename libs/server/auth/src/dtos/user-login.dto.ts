
import { validationI18nMessage } from "@nestify/server/util/i18n";
import { IsEmailField } from "@nestify/server/util/nest-framework/validators";
import { IsNotEmpty } from "class-validator";

export class UserLoginDto {
	/**
	 * Email of user
	 * @example someone@something.com
	 */
	@IsNotEmpty({ message: validationI18nMessage("validation.isNotEmpty") })
	email!: string;

	/**
	 * Password of user
	 * @example AVeryGoodPassword@&67t75
	 */
	@IsNotEmpty({ message: validationI18nMessage("validation.isNotEmpty") })
	password?: string;
}

export class MagicLinkLogin {
	/**
	 * Email of user
	 * @example someone@something.com
	 */
	@IsEmailField()
	destination!: string;
}
