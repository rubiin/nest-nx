
import { I18nTranslations } from "@nestify/server/util/i18n";
import { IsEqualTo,IsPassword, IsStringField } from "@nestify/server/util/nest-framework/validators";
import { PickType } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { i18nValidationMessage } from "nestjs-i18n";

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
	@IsStringField({ minLength: 8, maxLength: 50 })
	@IsPassword({ message: i18nValidationMessage<I18nTranslations>("validation.isPassword") })
	password!: string;

	/**
	 * New password of user
	 * @example AVeryGoodPassword@&67t75
	 */

	@IsNotEmpty({ message: i18nValidationMessage<I18nTranslations>("validation.isNotEmpty") })
	@IsEqualTo("password")
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
	@IsNotEmpty({ message: i18nValidationMessage<I18nTranslations>("validation.isNotEmpty") })
	oldPassword!: string;
}
