import { applyRawBodyOnlyTo } from "@golevelup/nestjs-webhooks";
import { AppRootModule } from "@nestify/server/root";
import { NestCacheModule } from "@nestify/server/util/cache";
import { CustomThrottlerGuard } from "@nestify/server/util/nest-framework/guards";
import {
	ClearCacheInterceptor,
	HttpCacheInterceptor,
} from "@nestify/server/util/nest-framework/interceptors";
import {
	ClearCacheMiddleware,
	RealIpMiddleware,
} from "@nestify/server/util/nest-framework/middlewares";
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { SentryInterceptor } from "@ntegral/nestjs-sentry";

@Module({
	imports: [AppRootModule, NestCacheModule],
	providers: [
		{
			provide: APP_INTERCEPTOR,
			useValue: new SentryInterceptor(),
		},
		{
			provide: APP_GUARD,
			useClass: CustomThrottlerGuard,
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: HttpCacheInterceptor,
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: ClearCacheInterceptor,
		},
	],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		applyRawBodyOnlyTo(consumer, {
			method: RequestMethod.ALL,
			path: "stripe/webhook",
		});
		consumer
			.apply(RealIpMiddleware)
			.forRoutes({
				path: "*",
				method: RequestMethod.ALL,
			})
			.apply(ClearCacheMiddleware)
			.forRoutes({
				path: "*",
				method: RequestMethod.GET,
			});
	}
}
