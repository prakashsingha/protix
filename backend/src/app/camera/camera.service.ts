import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Camera } from './camera.model';

@Injectable()
export class CameraService {
  constructor(
    @InjectRepository(Camera)
    private cameraRepository: Repository<Camera>,
  ) {}

  async findAll() {
    return this.cameraRepository.find();
  }
}
