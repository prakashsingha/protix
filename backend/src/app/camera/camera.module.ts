import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CameraController } from './camera.controller';
import { Camera } from './camera.model';
import { CameraService } from './camera.service';

@Module({
  imports: [TypeOrmModule.forFeature([Camera])],
  providers: [CameraService],
  controllers: [CameraController],
})
export class CameraModule {}
