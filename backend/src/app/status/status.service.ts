import { Injectable } from '@nestjs/common';
import { Status } from './status.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
  ) {}

  async findAll() {
    return this.statusRepository.find();
  }

  async findOne(id) {
    return this.statusRepository.findOne({ where: { id } });
  }
}
