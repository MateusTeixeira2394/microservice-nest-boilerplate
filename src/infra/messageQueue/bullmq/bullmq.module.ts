import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT || '6379'),
      },
      defaultJobOptions: {
        attempts: 3,
      },
    }),
    BullModule.registerQueue({
      name: 'queue', // Register the queue with queue name
    }),
  ],
  providers: [], // Instantiate the consumers and providers
  exports: [], // export the consumers and providers
})
export class BullMQModule {}
