import { I18nContext, i18nValidationMessage,Path, TranslateOptions } from "nestjs-i18n";

import { I18nTranslations } from "./i18n-generated";



export const translate = (key: Path<I18nTranslations>, options: TranslateOptions = {}) =>
	I18nContext.current<I18nTranslations>().t(key, options);

export const validationI18nMessage = (key: Path<I18nTranslations>, args?: any) =>
	i18nValidationMessage(key, args);
