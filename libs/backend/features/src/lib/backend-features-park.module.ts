import { Module } from '@nestjs/common';
import { ParkController } from './park/park.controller';
import { ParkService } from './park/park.service';

@Module({
  controllers: [ParkController],
  providers: [ParkService],
  exports: [ParkService],
})
export class BackendFeaturesParkModule {}
