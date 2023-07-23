import { NumberFieldOptions } from '../../@types';
import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  Max,
  Min,
} from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

/**
 * It's a decorator that validates a number field
 * @param {NumberFieldOptions} [options_] - IsNumberFieldOptions
 * @returns A function that returns a decorator.
 */

export const IsNumberField = (options_?: NumberFieldOptions) => {
  const options: NumberFieldOptions = {
    min: 1,
    required: true,
    each: false,
    max: Number.MAX_SAFE_INTEGER,
    arrayMinSize: 0,
    arrayMaxSize: Number.MAX_SAFE_INTEGER,
    int: true,
    positive: true,
    ...options_,
  };
  const decoratorsToApply = [
    Type(() => Number),
    Min(options.min, {
      message: i18nValidationMessage<I18nTranslations>('validation.min'),
      each: options.each,
    }),
    Max(options.max, {
      message: i18nValidationMessage<I18nTranslations>('validation.max'),
      each: options.each,
    }),
  ];

  if (options.int) {
    decoratorsToApply.push(
      IsInt({
        message: i18nValidationMessage<I18nTranslations>(
          'validation.isDataType',
          {
            type: 'integer number',
          }
        ),
        each: options.each,
      })
    );
  } else {
    decoratorsToApply.push(
      IsNumber(
        {},
        {
          message: i18nValidationMessage<I18nTranslations>(
            'validation.isDataType',
            {
              type: 'number',
            }
          ),
          each: options.each,
        }
      )
    );
  }

  if (options.positive) {
    decoratorsToApply.push(
      IsPositive({
        message: i18nValidationMessage<I18nTranslations>(
          'validation.isDataType',
          {
            type: 'positive number',
          }
        ),
        each: options.each,
      })
    );
  }

  if (options.required) {
    decoratorsToApply.push(
      IsNotEmpty({
        message: i18nValidationMessage<I18nTranslations>(
          'validation.isNotEmpty'
        ),
        each: options.each,
      })
    );

    if (options.each) {
      decoratorsToApply.push(
        ArrayNotEmpty({
          message: i18nValidationMessage<I18nTranslations>(
            'validation.isNotEmpty'
          ),
        })
      );
    }
  } else {
    decoratorsToApply.push(IsOptional());
  }

  if (options.each) {
    decoratorsToApply.push(
      IsArray({
        message: i18nValidationMessage<I18nTranslations>(
          'validation.isDataType',
          {
            type: 'array',
          }
        ),
      })
    );
  }

  return applyDecorators(...decoratorsToApply);
};
