import { LoadStrategy, Options } from "@mikro-orm/core";
import { defineConfig } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";
import { BaseRepository,Category,Comment,Conversation,Message,NewsLetter,OtpLog,PointRedemptionLog,Post,Protocol,Referral,RefreshToken,Subscriber,Tag,User } from "@nestify/server/util/common";
import { Logger, NotFoundException } from "@nestjs/common";
import { config as environmentConfig } from "dotenv";
import dotEnvExpand from "dotenv-expand";

/**
 *
 * `MikroOrmConfig` is a configuration object for `MikroORM` that is used to
 * This is required to run mikro-orm cli
 *
 * @see https://mikro-orm.io/docs/configuration
 * @see https://mikro-orm.io/docs/cli
 *
 */

const logger = new Logger("MikroORM");

const environment = environmentConfig({
	path: `${process.cwd()}/env/.env.${process.env.NODE_ENV}`,
});

dotEnvExpand.expand(environment);

logger.log(`🛠️ Using env ${process.cwd()}/env/.env.${process.env.NODE_ENV}\n`);

export const baseOptions = {
	entities: [User,Post,Comment,Category,Conversation,Message,NewsLetter,OtpLog,PointRedemptionLog,Protocol,Referral,RefreshToken,Subscriber,Tag],
	findOneOrFailHandler: (entityName: string, key: any) => {
		return new NotFoundException(`${entityName} not found for ${key}`);
	},
	migrations: {
		migrations: {
			fileName: (timestamp: string, name?: string) => {
				if (!name) return `Migration${timestamp}`;

				return `Migration${timestamp}_${name}`;
			},
		},
		tableName: "migrations", // name of database table with log of executed transactions
		pathTs: "./migrations", // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)
		glob: "!(*.d).{js,ts}", // how to match migration files (all .js and .ts files, but not .d.ts)
		transactional: true, // wrap each migration in a transaction
		allOrNothing: true, // wrap all migrations in master transaction
		snapshot: true, // save snapshot when creating new migrations
	},
	seeder: {
		path: "dist/common/database/seeders/", // path to the folder with seeders
		pathTs: "src/common/database/seeders/", // path to the folder with seeders
		defaultSeeder: "DatabaseSeeder", // default seeder class name
		glob: "!(*.d).{js,ts}", // how to match seeder files (all .js and .ts files, but not .d.ts)
	},
	logger: logger.log.bind(logger),
	metadataProvider: TsMorphMetadataProvider,
	highlighter: new SqlHighlighter(),
	debug: true,
	loadStrategy: LoadStrategy.JOINED,
	entityRepository: BaseRepository,
	forceUtcTimezone: true,
	allowGlobalContext: true,
	registerRequestContext: false,
	pool: { min: 2, max: 10 },
};

const config: Options = defineConfig({
	...baseOptions,
	dbName: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
	port: Number(process.env.DB_PORT),
	user: process.env.DB_USERNAME,
	host: process.env.DB_HOST,
});

export default config;
