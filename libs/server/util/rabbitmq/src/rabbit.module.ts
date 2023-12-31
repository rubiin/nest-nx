import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { Config } from "@nestify/server/util/config";
import { Global, Logger, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { RabbitService } from "./rabbit.service";

const logger = new Logger("RabbitMQ");

@Global()
@Module({
	imports: [
		RabbitMQModule.forRootAsync(RabbitMQModule, {
      imports: [ConfigModule],
      inject: [ConfigService],
			useFactory: (configService: ConfigService<Config, true>) => ({
				exchanges: [
					{
						name: configService.get("rabbitmq.exchange", { infer: true }),
						type: "topic",
					},
				],
				uri: configService.get("rabbitmq.url", { infer: true }),
				connectionInitOptions: { wait: false, timeout: 9000 },
				logger: logger,
				channels: {
					"channel-1": {
						prefetchCount: +configService.get("rabbitmq.prefetchCount", {
							infer: true,
						}),
						default: true,
					},
					"channel-2": {
						prefetchCount: 2,
					},
				},
			}),
		}),
	],
	providers: [RabbitService],
	exports: [RabbitService, RabbitMQModule],
})
export class NestRabbitModule {}
