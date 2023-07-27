import { validationI18nMessage } from "@nestify/server/util/i18n";
import { applyDecorators } from "@nestjs/common";
import { ArrayNotEmpty, IsArray, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

import { DateFieldOptions as EmailFieldOptions } from "./is-date-field.validator";

export const IsEmailField = (options_?: EmailFieldOptions) => {
	const options: EmailFieldOptions = {
		each: false,
		required: true,
		...options_,
	};
	const decoratorsToApply = [
		IsEmail(
			{},
			{
				message: validationI18nMessage("validation.isDataType", {
					type: "email address",
				}),
				each: options.each,
			},
		),
	];

	if (options.required) {
		decoratorsToApply.push(
			IsNotEmpty({
				message: validationI18nMessage("validation.isNotEmpty"),
				each: options.each,
			}),
		);

		if (options.each) {
			decoratorsToApply.push(
				ArrayNotEmpty({
					message: validationI18nMessage("validation.isNotEmpty"),
				}),
			);
		}
	} else {
		decoratorsToApply.push(IsOptional());
	}

	if (options.each) {
		decoratorsToApply.push(
			IsArray({
				message: validationI18nMessage("validation.isDataType", {
					type: "array",
				}),
			}),
		);
	}

	return applyDecorators(...decoratorsToApply);
};
