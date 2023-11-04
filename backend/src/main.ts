import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MigrateDbService } from './app/migrate-db-service';
import { createConnection } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Protix API')
    .setDescription('The Protix API description')
    .setVersion('1.0')
    .addTag('API List')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const migrateService = app.get(MigrateDbService);
  await migrateService.run();

  await app.listen(process.env.APP_PORT || 3001);
}
bootstrap();
