import { IsInt, IsOptional } from 'class-validator';

export class FilterParamDto {
  @IsOptional()
  @IsInt()
  id?: number;
}
