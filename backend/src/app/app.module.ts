import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StatusModule } from './status/status.module';
import { UserModule } from './user/user.module';
import { ZoneModule } from './zone/zone.module';
import { CameraModule } from './camera/camera.module';
import { IncidentCaseModule } from './incident-case/incident-case.module';
import { TeamModule } from './team/team.module';
import { IncidentReviewModule } from './incident-review/incident-review.module';
import { MigrateDbService } from './migrate-db-service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    StatusModule,
    UserModule,
    ZoneModule,
    CameraModule,
    IncidentCaseModule,
    TeamModule,
    IncidentReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService, MigrateDbService],
})
export class AppModule {}
