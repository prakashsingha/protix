import { Injectable } from '@nestjs/common';
import { IncidentCase } from './incident-case.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { FilterParamDto } from './dto';
import { UpdateIncidentCaseDto } from './dto/request/update-incident-case.dto';
import { StatusService } from '../status/status.service';

@Injectable()
export class IncidentCaseService {
  constructor(
    @InjectRepository(IncidentCase)
    private caseRepository: Repository<IncidentCase>,
    private readonly statusService: StatusService,
  ) {}

  async paginate(
    options: IPaginationOptions,
  ): Promise<Pagination<IncidentCase>> {
    return paginate<IncidentCase>(this.caseRepository, options);
  }

  async findAll(
    options: IPaginationOptions,
  ): Promise<Pagination<IncidentCase>> {
    return this.paginate(options);
  }

  async findOne(filterParamDto: FilterParamDto): Promise<IncidentCase> {
    return this.caseRepository.findOne({ where: { ...filterParamDto } });
  }

  async updateOne(
    incidentCase: IncidentCase,
    dto: UpdateIncidentCaseDto,
  ): Promise<any> {
    try {
      incidentCase = {
        ...incidentCase,
        ...dto,
      };

      const status = await this.statusService.findOne(dto.statusId);
      incidentCase.status = status;
      return this.caseRepository.save(incidentCase);
    } catch (error) {
      throw error;
    }
  }
}
