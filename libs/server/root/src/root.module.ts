import { AuthModule } from "@nestify/server/auth";
import { CategoryModule } from "@nestify/server/category";
import { HealthModule } from "@nestify/server/health";
import { PostModule } from "@nestify/server/post";
import { ProfileModule } from "@nestify/server/profile";
import { TagsModule } from "@nestify/server/tags";
import { TwoFactorModule } from "@nestify/server/twofa";
import { UserModule } from "@nestify/server/user";
import { NestCloudinaryModule } from "@nestify/server/util/cloudinary";
import { NestConfigModule } from "@nestify/server/util/config";
import { NestHttpModule } from "@nestify/server/util/http";
import { NestI18nModule } from "@nestify/server/util/i18n";
import { NestJwtModule } from "@nestify/server/util/jwt";
import { NestMailModule } from "@nestify/server/util/mailer";
import { IsUniqueConstraint } from "@nestify/server/util/nest-framework/validators";
import { OrmModule } from "@nestify/server/util/orm";
import { NestPinoModule } from "@nestify/server/util/pino";
import { NestRabbitModule } from "@nestify/server/util/rabbitmq";
import { NestSentryModule } from "@nestify/server/util/sentry";
import { NestThrottlerModule } from "@nestify/server/util/throttler";
import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
	imports: [
		AuthModule,
		PostModule,
		ProfileModule,
		HealthModule,
		UserModule,
		TagsModule,
		CategoryModule,
		OrmModule,
		TwoFactorModule,
		NestRabbitModule,
		NestMailModule,
		NestConfigModule,
		NestPinoModule,
		NestI18nModule,
		NestCloudinaryModule,
		NestSentryModule,
		NestThrottlerModule,
		NestHttpModule,
		NestJwtModule,
		ScheduleModule.forRoot(),
	],
	providers: [IsUniqueConstraint],
})
export class AppRootModule {}
