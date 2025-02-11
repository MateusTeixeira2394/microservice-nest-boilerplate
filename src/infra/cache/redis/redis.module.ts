import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs-modules/ioredis';
import { RedisAdapter } from './redis.adapter';

@Module({
  imports: [
    RedisModule.forRoot({
      type: 'single',
      options: {
        port: Number(process.env.REDIS_PORT || '6379'),
        host: process.env.REDIS_HOST,
      },
    }),
  ],
  providers: [RedisAdapter],
  exports: [RedisAdapter],
})
export class CacheRedisModule {}
