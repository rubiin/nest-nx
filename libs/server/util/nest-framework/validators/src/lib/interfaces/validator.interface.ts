export interface BaseValidator {
	required?: boolean;
	message?: string;
}

export interface BaseArrayValidator {
	arrayMaxSize?: number;
	arrayMinSize?: number;
	each?: boolean;
}

