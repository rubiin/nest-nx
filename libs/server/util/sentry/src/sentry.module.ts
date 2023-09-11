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
				dsn: configService.get("sentry.sentryDsn", { infer: true }),
				debug: true,
				environment: configService.get("sentry.environment", { infer: true }),
				tracesSampleRate: 1,
			}),
		}),
	],
	exports: [SentryModule],
})
export class NestSentryModule {}
