import { Module } from '@nestjs/common';

@Module({
  providers: [], // Instantiate the external apis
  exports: [], // Export the external api services
})
export class HttpModule {}
