import { MinMaxLengthOptions } from '../../@types';
import { applyDecorators } from '@nestjs/common';
import { MaxLength, MinLength } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

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
      message: i18nValidationMessage<I18nTranslations>('validation.minLength'),
      each: options.each,
    }),
    MaxLength(options.maxLength, {
      message: i18nValidationMessage<I18nTranslations>('validation.maxLength'),
      each: options.each,
    })
  );
};
