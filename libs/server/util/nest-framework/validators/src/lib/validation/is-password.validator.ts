import { validationI18nMessage } from "@nestify/server/util/i18n";
import { applyDecorators } from "@nestjs/common";
import {
  IsNotEmpty,
	registerDecorator,
	ValidationArguments,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from "class-validator";

import { MinMaxLength } from "./min-max-length.decorator";
/**
 *
 * Rules used:
 * This regex checks that password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
 *
 *
 * Tests at https://regex101.com/r/m6CWm9/1
 *
 */

@ValidatorConstraint({ async: true })
class IsPasswordConstraint implements ValidatorConstraintInterface {
	async validate(value: string, _arguments: ValidationArguments) {
		const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).*$/;

		return PASSWORD_REGEX.test(value);
	}

	defaultMessage(arguments_: ValidationArguments) {
		const property = arguments_.property;

		return `${property} should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character`;
	}
}

export const IsPassword = (validationOptions?: ValidationOptions): PropertyDecorator => {
	return function (object: Record<string, any>, propertyName: string | symbol) {
		registerDecorator({
			target: object.constructor,
			propertyName: propertyName as string,
			options: validationOptions,
			constraints: [],
			validator: IsPasswordConstraint,
		});
	};
};


export const IsPasswordField = (validationOptions?: ValidationOptions & { minLength?: number; maxLength?: number }) => {
  return applyDecorators(
    IsNotEmpty({
      message: validationI18nMessage("validation.isNotEmpty"),
    }),
    MinMaxLength({
      minLength: validationOptions.minLength ?? 8,
      maxLength: validationOptions.maxLength ?? 40,
    }),
    IsPassword(validationOptions),
  );
};
