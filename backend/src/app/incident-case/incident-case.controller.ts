import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Query,
} from '@nestjs/common';
import { IncidentCase } from './incident-case.model';
import { IncidentCaseService } from './incident-case.service';
import { Pagination } from 'nestjs-typeorm-paginate';
import { FilterParamDto } from './dto';
import { UpdateIncidentCaseDto } from './dto/request/update-incident-case.dto';

@Controller('incident-case')
export class IncidentCaseController {
  constructor(private readonly caseService: IncidentCaseService) {}

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<IncidentCase>> {
    limit = limit > 50 ? 50 : limit;
    return this.caseService.findAll({
      page,
      limit,
      route: '/incident-case',
    });
  }

  @Get(':id')
  findOne(filterParamDto: FilterParamDto): Promise<IncidentCase> {
    return this.caseService.findOne(filterParamDto);
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: number,
    @Body() updateIncidentCaseDto: UpdateIncidentCaseDto,
  ): Promise<IncidentCase> {
    let incidentCase = await this.caseService.findOne({ id });
    if (!incidentCase) {
      throw new NotFoundException(`Incident Case Id: ${id} does not exist!`);
    }

    return this.caseService.updateOne(incidentCase, updateIncidentCaseDto);
  }
}
