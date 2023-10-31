import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZoneController } from './zone.controller';
import { Zone } from './zone.model';
import { ZoneService } from './zone.service';

@Module({
  imports: [TypeOrmModule.forFeature([Zone])],
  providers: [ZoneService],
  controllers: [ZoneController],
})
export class ZoneModule {}
