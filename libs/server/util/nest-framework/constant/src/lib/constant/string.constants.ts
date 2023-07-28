import { capitalize } from "helper-fns";

export const REQUEST_ID_TOKEN_HEADER = "x-request-id";

// TODO: Move messages to a i18n file

export const THROTTLE_LIMIT_RESPONSE = "Too many requests, please try again later.";
export const MULTER_IMAGE_FILTER = "Only image files are allowed!.";
export const API_UNAUTHORIZED_RESPONSE = "No auth token in request.";

// swagger constants
const packageJson = {
	name: "nestify",
	version: "1.0.0",
	description: "Nestify API Documentation",
};

export const APP_NAME = packageJson.name;
export const SWAGGER_API_CURRENT_VERSION = packageJson.version;
export const SWAGGER_DESCRIPTION = packageJson.description;
export const SWAGGER_TITLE = `${capitalize(APP_NAME)} API Documentation`;

export const SWAGGER_API_ENDPOINT = "doc";
