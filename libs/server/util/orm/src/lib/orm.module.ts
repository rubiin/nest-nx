
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { defineConfig } from "@mikro-orm/postgresql";
import { Config } from "@nestify/server/util/config";
import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { baseOptions } from "./mikro-orm-cli.config";


@Global()
@Module({
	imports: [
		MikroOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService<Config, true>) =>
				defineConfig({
					...baseOptions,
					host: configService.get("database.host", { infer: true }),
					port: configService.get("database.port", { infer: true }),
					password: configService.get("database.password", { infer: true }),
					user: configService.get("database.user", { infer: true }),
					dbName: configService.get("database.dbName", { infer: true }),
				}),
			inject: [ConfigService],
		}),
		// MikroOrmModule.forFeature({
		// 	entities: Object.values(Entities), // TODO: add entities
		// }),
	],
	exports: [MikroOrmModule],
})
export class OrmModule {}
