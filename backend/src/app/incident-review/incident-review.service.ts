import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IncidentReview } from './incident-review.model';
import { CreateReviewDto, FilterParamDto } from './dto';
import { instanceToPlain } from 'class-transformer';
import { IncidentCaseService } from '../incident-case/incident-case.service';
import { UpdateIncidentReviewDto } from './dto/request/update-incident-review.dto';

@Injectable()
export class IncidentReviewService {
  private readonly logger = new Logger(IncidentReviewService.name);

  constructor(
    @InjectRepository(IncidentReview)
    private reviewRepository: Repository<IncidentReview>,
    private readonly caseService: IncidentCaseService,
  ) {}

  async findAll() {
    return this.reviewRepository.find();
  }

  async findBy(filterParamDto: FilterParamDto) {
    return this.reviewRepository.find({ where: { ...filterParamDto } });
  }

  async create(createReviewDto: CreateReviewDto): Promise<IncidentReview> {
    const incidentCase = await this.caseService.findOne({
      id: createReviewDto.incidentCaseId,
    });

    if (!incidentCase) {
      throw new NotFoundException(
        `caseId: '${createReviewDto.incidentCaseId}' cannot be found`,
      );
    }

    const data = instanceToPlain(createReviewDto);
    const review: IncidentReview = this.reviewRepository.create({
      ...data,
      createdBy: 1, //static user_id
      updatedBy: 1, //static user_id
    });

    try {
      return this.reviewRepository.save(review);
    } catch (error) {
      const errorMessage = `Failed to create a review || Payload: ${JSON.stringify(
        createReviewDto,
      )} || ${error.message}`;

      this.logger.error(errorMessage);

      throw new HttpException(errorMessage, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(filterParamDto: FilterParamDto): Promise<IncidentReview> {
    return this.reviewRepository.findOne({ where: { ...filterParamDto } });
  }

  async updateOne(id: number, dto: UpdateIncidentReviewDto): Promise<any> {
    let incidentReview = await this.findOne({ id });
    if (!incidentReview) {
      throw new NotFoundException(`Incident Case Id: ${id} does not exist!`);
    }

    try {
      incidentReview = {
        ...incidentReview,
        ...dto,
      };

      return this.reviewRepository.save(incidentReview);
    } catch (error) {
      throw error;
    }
  }
}
