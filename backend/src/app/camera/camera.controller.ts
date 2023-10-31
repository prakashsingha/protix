import { Controller, Get } from '@nestjs/common';
import { Camera } from './camera.model';
import { CameraService } from './camera.service';

@Controller('camera')
export class CameraController {
  constructor(private readonly cameraService: CameraService) {}

  @Get()
  findAll(): Promise<Camera[]> {
    return this.cameraService.findAll();
  }
}
