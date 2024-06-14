// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use a validation pipe to validate incoming requests
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
  console.log('Application is running on: http://localhost:3001');
}
bootstrap();
