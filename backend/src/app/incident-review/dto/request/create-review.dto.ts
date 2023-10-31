import { IsInt, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsInt()
  incidentCaseId: number;

  @IsInt()
  reviewedBy: number;

  @IsInt()
  beforeStatusId: number;

  @IsInt()
  afterStatusId: number;

  @IsString()
  comments: string;
}
