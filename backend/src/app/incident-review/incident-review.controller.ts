import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { IncidentReview } from './incident-review.model';
import { IncidentReviewService } from './incident-review.service';
import { CreateReviewDto, FilterParamDto } from './dto';
import { UpdateIncidentReviewDto } from './dto/request/update-incident-review.dto';

@Controller('incident-review')
export class IncidentReviewController {
  constructor(private readonly reviewService: IncidentReviewService) {}

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<IncidentReview[]> {
    limit = limit > 10 ? 10 : limit;
    return this.reviewService.findAll();
  }

  @Get()
  findBy(@Query() query: FilterParamDto): Promise<IncidentReview[]> {
    return this.reviewService.findBy(query);
  }

  @Post()
  create(@Body() createReviewDto: CreateReviewDto): Promise<IncidentReview> {
    return this.reviewService.create(createReviewDto);
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: number,
    @Body() updateIncidentReviewDto: UpdateIncidentReviewDto,
  ): Promise<IncidentReview> {
    return this.reviewService.updateOne(id, updateIncidentReviewDto);
  }
}
