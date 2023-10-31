import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamController } from './team.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
