import { Config, NestConfigModule } from "@nestify/server/util/config";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { CloudinaryModule } from "nestjs-cloudinary";

@Module({
  imports: [
    CloudinaryModule.forRootAsync({
      imports: [NestConfigModule],
      useFactory: (configService: ConfigService<Config, true>) => ({
        isGlobal: true,
        cloud_name: configService.get("cloudinary.cloud_name", { infer: true }),
        api_key: configService.get("cloudinary.api_key", { infer: true }),
        api_secret: configService.get("cloudinary.api_secret", { infer: true }),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [CloudinaryModule],
})
export class NestCloudinaryModule {}
