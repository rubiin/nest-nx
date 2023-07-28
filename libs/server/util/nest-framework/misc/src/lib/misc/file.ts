import { MULTER_IMAGE_FILTER } from "@nestify/server/util/nest-framework/constant";
import { FileSize, FileType } from "@nestify/server/util/types";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { Request } from "express";
import { memoryStorage } from "multer";

export const ImageMulterOption: MulterOptions = {
	limits: {
		fileSize: FileSize.IMAGE, // 5 MB
	},
	storage: memoryStorage(),
	fileFilter: (_request: Request, file, callback) => {
		if (!FileType.IMAGE.test(file.mimetype)) {
			return callback(new Error(MULTER_IMAGE_FILTER), false);
		}

		return callback(null, true);
	},
};
