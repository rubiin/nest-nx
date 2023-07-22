import { StripeModule } from '@golevelup/nestjs-stripe';
import { Global, Logger, Module } from '@nestjs/common';
import { NestConfigModule, Config } from '@nestify/server/util/config';
import { ConfigService } from '@nestjs/config';
import { SkipThrottle } from "@nestjs/throttler";

const logger = new Logger('Stripe');

@Global()
@Module({
  imports: [
    StripeModule.forRootAsync(StripeModule, {
      imports: [NestConfigModule],
      useFactory: (configService: ConfigService<Config, true>) => ({
        apiKey: configService.get('stripe.apiKey', { infer: true }),
        logger: logger,
        webhookConfig: {
          stripeSecrets: {
            account: configService.get('stripe.account', { infer: true }),
            connect: configService.get('stripe.connect', { infer: true }),
          },
        },
        decorators: [SkipThrottle()],
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [StripeModule],
})
export class NestStripeModule {}
