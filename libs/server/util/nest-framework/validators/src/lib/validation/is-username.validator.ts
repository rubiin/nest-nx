/**
 *
 * Rules used:
 * This regex allows usernames to contain letters (both uppercase and lowercase), numbers, underscores, hyphens, and periods,
 * but ensures that they do not start with a number, underscore, hyphen, or period.
 *
 *
 * Tests at https://regex101.com/r/m5AT6j/2
 *
 */

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
4;

import { MinMaxLength } from "./min-max-length.decorator";

@ValidatorConstraint({ async: true })
class IsUsernameConstraint implements ValidatorConstraintInterface {
	async validate(value: string, _argument: ValidationArguments) {
		const USERNAME_REGEX = /^(?![\d._-])[\w-.]+$/;

		return USERNAME_REGEX.test(value);
	}

	defaultMessage(argument: ValidationArguments) {
		const property = argument.property;

		return `${property} must fulfill username's criteria`;
	}
}

export const IsUsername = (validationOptions?: ValidationOptions): PropertyDecorator => {
	return function (object: Record<string, any>, propertyName: string | symbol) {
		registerDecorator({
			target: object.constructor,
			propertyName: propertyName as string,
			options: validationOptions,
			constraints: [],
			validator: IsUsernameConstraint,
		});
	};
};

export const IsUsernameField = (validationOptions?: ValidationOptions & { minLength?: number; maxLength?: number } ) => {
  return applyDecorators(
    IsNotEmpty({
      message: validationI18nMessage("validation.isNotEmpty"),
    }),
    MinMaxLength({
      minLength: validationOptions.minLength ?? 5,
      maxLength: validationOptions.maxLength ?? 50,
    }),
    IsUsername(validationOptions),
  );
  }
