import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { GLOBAL_PREFIX } from './infra/shared/constants/project.constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(GLOBAL_PREFIX);

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('port');
  const ENV = configService.get<string>('env');

  const documentConfig = new DocumentBuilder()
    .setTitle('Microservice Nest Boilerplate')
    .setDescription(
      'Boilerplate to build microservices using the Hexagonal pattern',
    )
    .setVersion('1.0.0')
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('documentation', app, documentFactory);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.enableCors();

  await app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}...`);
    console.log(`Environment: ${ENV}`);
  });
}
bootstrap();
