// src/services/services.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './service.entity';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  findAll(): Promise<Service[]> {
    return this.servicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Service> {
    return this.servicesService.findOne(id);
  }

  @Post()
  create(@Body() service: Service): Promise<Service> {
    return this.servicesService.create(service);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() service: Service): Promise<void> {
    return this.servicesService.update(id, service);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.servicesService.remove(id);
  }
}
