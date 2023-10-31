import { IsInt, IsOptional } from 'class-validator';

export class UpdateIncidentCaseDto {
  @IsOptional()
  @IsInt()
  statusId?: number;
}
