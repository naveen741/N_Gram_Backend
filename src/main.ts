import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  const appPort = process.env.PORT || '5000';
  await app.listen(appPort);
  console.log(`server running on : 'http://localhost:${appPort}/graphql'`);
}
bootstrap();
