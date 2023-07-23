import { MailPayload, RoutingKey } from '@nestify/server/util/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { MailerService } from './mailer.service';
import { Injectable, Logger } from '@nestjs/common';
import { from, map, tap } from 'rxjs';

@Injectable()
export class MailProcessor {
  private logger = new Logger(MailProcessor.name);

  constructor(private readonly mailService: MailerService) {}

  @RabbitSubscribe({
    routingKey: [RoutingKey.SEND_MAIL, RoutingKey.SEND_NEWSLETTER],
    exchange: process.env.RABBITMQ_EXCHANGE,
    queue: process.env.RABBITMQ_QUEUE,
    createQueueIfNotExists: true,
  })
  sendMail(payload: MailPayload) {
    return from(
      this.mailService.sendMail({
        template: payload.template,
        replacements: payload.replacements,
        to: payload.to,
        subject: payload.subject,
        from: payload.from,
      })
    ).pipe(
      map(
        tap(() =>
          this.logger.log(
            `✅ Sent mail to ${payload.to} with subject ${payload.subject}`
          )
        )
      )
    );
  }
}
