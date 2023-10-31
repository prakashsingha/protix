import { Module } from '@nestjs/common';
import { IncidentReviewService } from './incident-review.service';
import { IncidentReviewController } from './incident-review.controller';
import { IncidentReview } from './incident-review.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidentCaseService } from '../incident-case/incident-case.service';
import { IncidentCaseModule } from '../incident-case/incident-case.module';
import { IncidentCase } from '../incident-case/incident-case.model';
import { StatusModule } from '../status/status.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([IncidentReview]),
    TypeOrmModule.forFeature([IncidentCase]),
    // TypeOrmModule.forFeature([Status]),
    StatusModule,
    IncidentCaseModule,
  ],
  providers: [IncidentReviewService, IncidentCaseService],
  controllers: [IncidentReviewController],
})
export class IncidentReviewModule {}
