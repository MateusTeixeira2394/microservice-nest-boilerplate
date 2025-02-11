import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './infra/config/configuration';
import { PostgresModule } from './infra/database/postgres/postgres.module';
import { HttpModule } from './infra/http/http.module';
import { BullMQModule } from './infra/messageQueue/bullmq/bullmq.module';
import { CacheRedisModule } from './infra/cache/redis/redis.module';

const PRODUCTION: string = 'production';
const DEVELOPMENT: string = 'development';

const NODE_ENV = process.env.NODE_ENV || DEVELOPMENT;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: `.env${NODE_ENV === PRODUCTION ? '' : '.' + NODE_ENV}`,
    }),
    HttpModule,
    PostgresModule,
    BullMQModule,
    CacheRedisModule,
  ],
  providers: [],
})
export class AppModule {}
