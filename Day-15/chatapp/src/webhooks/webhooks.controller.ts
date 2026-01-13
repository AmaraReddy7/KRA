import { Body, Controller, Post } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { HttpService } from '@nestjs/axios';

@Controller('webhooks')
export class WebhooksController {
  constructor(
    private readonly webhooksservice: WebhooksService,
    private readonly httpService: HttpService,
  ) {}
  @Post('/order')
  createOrder(@Body() data) {
    const ordercreated = this.webhooksservice.createOrder(data);

    this.httpService
      .post('https://webhook.site/ad1feb1d-5895-4d1c-8e94-762903ad4f9f', data)
      .subscribe({
        complete: () => {
          console.log('completed');
        },
        error: (err) => {},
      });
    return ordercreated;
  }
}
