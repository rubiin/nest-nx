import { Config } from "@nestify/server/util/config";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { SentryModule } from "@ntegral/nestjs-sentry";

@Module({
	imports: [
		SentryModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
			useFactory: async (configService: ConfigService<Config, true>) => ({
				dsn: configService.get("app.sentryDsn", { infer: true }),
				debug: true,
				environment: "development",
				tracesSampleRate: 1,
			}),
		}),
	],
	exports: [SentryModule],
})
export class NestSentryModule {}
