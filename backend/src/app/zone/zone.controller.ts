import { Controller, Get } from '@nestjs/common';
import { Zone } from './zone.model';
import { ZoneService } from './zone.service';

@Controller('zone')
export class ZoneController {
  constructor(private readonly zoneService: ZoneService) {}

  @Get()
  findAll(): Promise<Zone[]> {
    return this.zoneService.findAll();
  }
}
