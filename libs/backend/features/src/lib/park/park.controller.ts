import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ParkService } from './park.service';
import { IPark } from '@client-nx-her/shared/api';
import { CreateParkDto } from '@client-nx-her/backend/dto';

@Controller('park')
export class ParkController {
  constructor(private parkService: ParkService) {}

  @Get('')
  getAll(): IPark[] {
    return this.parkService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): IPark {
    return this.parkService.getOne(id);
  }

  @Post('')
  create(@Body() data: CreateParkDto): IPark {
    return this.parkService.create(data);
  }
}
