import { validationI18nMessage } from "@nestify/server/util/i18n";
import { applyDecorators } from "@nestjs/common";
import { MaxLength, MinLength } from "class-validator";

import { StringFieldOptions } from "./is-string-field.decorator";

export type MinMaxLengthOptions = Pick<StringFieldOptions, "each" | "minLength" | "maxLength">;

/**
 * It's a decorator that validates the length of a string to be between a minimum and maximum length
 * @param {MinMaxLengthOptions} [options_] - IsMinMaxLengthOptions
 * returns
 */
export const MinMaxLength = (options_?: MinMaxLengthOptions) => {
	const options: MinMaxLengthOptions = {
		minLength: 2,
		maxLength: 500,
		each: false,
		...options_,
	};

	return applyDecorators(
		MinLength(options.minLength, {
			message: validationI18nMessage("validation.minLength"),
			each: options.each,
		}),
		MaxLength(options.maxLength, {
			message: validationI18nMessage("validation.maxLength"),
			each: options.each,
		}),
	);
};
