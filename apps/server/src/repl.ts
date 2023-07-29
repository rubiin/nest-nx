import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

import { Logger } from "@nestjs/common";
import { repl } from "@nestjs/core";

import { AppModule } from "./app/app.module";

const logger = new Logger("Repl");

async function bootstrap() {
	const replServer = await repl(AppModule);

	// sets up history file for repl
	const cacheDirectory = join("node_modules", ".cache");

	if (!existsSync(cacheDirectory)) mkdirSync(cacheDirectory);

	replServer.setupHistory(join(cacheDirectory, ".nestjs_repl_history"), error => {
		if (error) logger.error(error);
	});
}
bootstrap();
