import { Config, NestConfigModule } from "@nestify/server/util/config";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { SentryModule } from "@ntegral/nestjs-sentry";

@Module({
	imports: [
		SentryModule.forRootAsync({
			imports: [NestConfigModule],
			useFactory: async (configService: ConfigService<Config, true>) => ({
				dsn: configService.get("app.sentryDsn", { infer: true }),
				debug: true,
				environment: "development",
				tracesSampleRate: 1,
			}),
			inject: [ConfigService],
		}),
	],
	exports: [SentryModule],
})
export class NestSentryModule {}
