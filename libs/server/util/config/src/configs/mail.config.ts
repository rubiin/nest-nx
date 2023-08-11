/* eslint-disable unicorn/no-thenable  */

// available values constants
import { registerAs } from "@nestjs/config";
import Joi from "joi";

export const SES_REGIONS = [
	"us-east-2",
	"us-east-1",
	"us-west-1",
	"us-west-2",
	"af-south-1",
	"ap-southeast-3",
	"ap-south-1",
	"ap-northeast-3",
	"ap-northeast-2",
	"ap-southeast-1",
	"ap-southeast-2",
	"ap-northeast-1",
	"ca-central-1",
	"eu-central-1",
	"eu-west-1",
	"eu-west-2",
	"eu-south-1",
	"eu-west-3",
	"eu-north-1",
	"me-south-1",
	"sa-east-1",
	"us-gov-west-1",
];

export const mailConfigValidationSchema = {
	MAIL_SERVER: Joi.string().required().valid("SMTP", "SES"),
	MAIL_USERNAME: Joi.string().when("MAIL_SERVER", {
		is: "SMTP",
		then: Joi.required(),
	}),
	MAIL_PASSWORD: Joi.string().when("MAIL_SERVER", {
		is: "SMTP",
		then: Joi.required(),
	}),
	MAIL_HOST: Joi.string().when("MAIL_SERVER", {
		is: "SMTP",
		then: Joi.required(),
	}),
	MAIL_PORT: Joi.number().port().when("MAIL_SERVER", {
		is: "SMTP",
		then: Joi.required(),
	}),
	MAIL_PREVIEW_EMAIL: Joi.boolean().default(false).optional(),
	MAIL_BCC_LIST: Joi.string().optional(),
	MAIL_TEMPLATE_DIR: Joi.string().required(),
	MAIL_SENDER_EMAIL: Joi.string().required(),
	MAIL_SES_KEY: Joi.string().when("MAIL_SERVER", {
		is: "SES",
		then: Joi.required(),
	}),
	MAIL_SES_ACCESS_KEY: Joi.string().when("MAIL_SERVER", {
		is: "SES",
		then: Joi.required(),
	}),
	MAIL_SES_REGION: Joi.string()
		.valid(...SES_REGIONS)
		.when("MAIL_SERVER", { is: "SES", then: Joi.required() }),
};

export const mail = registerAs("mail", () => ({
	username: process.env.MAIL_USERNAME,
	password: process.env.MAIL_PASSWORD,
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	server: process.env.MAIL_SERVER,
	previewEmail: process.env.MAIL_PREVIEW_EMAIL,
	bccList: process.env?.MAIL_BCC_LIST ? process.env.MAIL_BCC_LIST.split(",") : [],
	templateDir: process.env.MAIL_TEMPLATE_DIR,
	senderEmail: process.env.MAIL_SENDER_EMAIL,
	sesKey: process.env.MAIL_SES_KEY,
	sesAccessKey: process.env.MAIL_SES_ACCESS_KEY,
	sesRegion: process.env.MAIL_SES_REGION,
}));
