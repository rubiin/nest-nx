import { FileSize, FileType, FileValidator } from "@nestify/server/util/types";
import { HttpStatus, ParseFilePipeBuilder } from "@nestjs/common";

/**
 *
 * It takes in a fileType, fileSize, and required boolean and returns a ParseFilePipeBuilder object
 * with the fileType and fileSize validators added to it
 * @param {FileValidator}  - IFileValidator
 * @returns A function that returns a ParseFilePipeBuilder
 *
 */
export const fileValidatorPipe = ({
	fileType = FileType.IMAGE,
	fileSize = FileSize.IMAGE,
	required = true,
}: FileValidator) => {
	return new ParseFilePipeBuilder()
		.addFileTypeValidator({
			fileType,
		})
		.addMaxSizeValidator({
			maxSize: fileSize,
		})
		.build({
			errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
			fileIsRequired: required,
		});
};
