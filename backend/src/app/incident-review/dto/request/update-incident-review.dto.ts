import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateIncidentReviewDto {
  @IsNotEmpty()
  @IsString()
  comment: string;
}
