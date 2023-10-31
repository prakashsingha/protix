import { Module } from '@nestjs/common';
import { IncidentCaseService } from './incident-case.service';
import { IncidentCaseController } from './incident-case.controller';
import { IncidentCase } from './incident-case.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusModule } from '../status/status.module';
import { StatusService } from '../status/status.service';
import { Status } from '../status/status.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([IncidentCase]),
    TypeOrmModule.forFeature([Status]),
    StatusModule,
  ],
  providers: [IncidentCaseService, StatusService],
  controllers: [IncidentCaseController],
  exports: [IncidentCaseService],
})
export class IncidentCaseModule {}
