import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.model';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private statusRepository: Repository<Team>,
  ) {}

  async findAll() {
    return this.statusRepository.find();
  }
}
