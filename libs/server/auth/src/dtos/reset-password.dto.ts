import { validationI18nMessage } from "@nestify/server/util/i18n";
import {
	IsEqualToField,
	IsPasswordField,
	IsStringField,
} from "@nestify/server/util/nest-framework/validators";
import { PickType } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ResetPasswordDto {
	/**
	 * Otp code sent on email
	 * @example 986579
	 */
	@IsStringField({
		minLength: 6,
		maxLength: 6,
	})
	otpCode!: string;

	/**
	 * New password of user
	 * @example SomeThingNew7^#%
	 */
	@IsPasswordField({ message: validationI18nMessage("validation.isPassword") })
	password!: string;

	/**
	 * New password of user
	 * @example AVeryGoodPassword@&67t75
	 */

	@IsNotEmpty({ message: validationI18nMessage("validation.isNotEmpty") })
	@IsEqualToField("password")
	confirmPassword!: string;
}

export class ChangePasswordDto extends PickType(ResetPasswordDto, [
	"password",
	"confirmPassword",
] as const) {
	/**
	 * Password of user
	 * @example SomeThingNew7^#%
	 */
	@IsNotEmpty({ message: validationI18nMessage("validation.isNotEmpty") })
	oldPassword!: string;
}
