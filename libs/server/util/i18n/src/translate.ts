import { I18nContext, Path, TranslateOptions } from "nestjs-i18n";

import { I18nTranslations } from "./generated/i18n-generated";

export const translate = (key: Path<I18nTranslations>, options: TranslateOptions = {}) =>
	I18nContext.current<I18nTranslations>().t(key, options);

export const validationI18nMessage = (key: Path<I18nTranslations>, args?: any) =>
	validationI18nMessage(key, args);
