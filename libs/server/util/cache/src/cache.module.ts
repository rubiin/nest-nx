
import { CacheModule, CacheStore } from "@nestjs/cache-manager";
import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { redisStore } from "cache-manager-ioredis-yet";

import { CacheService } from "./cache.service";

@Global()
@Module({
	imports: [
		CacheModule.registerAsync({
		  imports: [ConfigModule],
      inject: [ConfigService],
			useFactory: async (configService: ConfigService) => {
				const store = await redisStore({
					host: configService.get("redis.host"),
          port: configService.get("redis.port"),
          username: configService.get("redis.username"),
          password: configService.get("redis.password"),
          keepAlive: 100,
					ttl: configService.get("redis.ttl"),
				});

				return {
					store: store as unknown as CacheStore,
				};
			},
		}),
	],
	exports: [CacheModule, CacheService],
	providers: [CacheService],
})
export class NestCacheModule {}
