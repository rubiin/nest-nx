import { Config } from "@nestify/server/util/config";
import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { TwilioModule } from "./twilio.module";

@Global()
@Module({
	imports: [
		TwilioModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
			useFactory: async (configService: ConfigService<Config, true>) => ({
				accountSid: configService.get("twilio.accountSid", { infer: true }),
				authToken: configService.get("twilio.authToken", { infer: true }),
				from: configService.get("twilio.from", { infer: true }),
			}),
		}),
	],
	exports: [TwilioModule],
})
export class NestTwilioModule {}
