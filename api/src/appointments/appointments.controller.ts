// src/appointments/appointments.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './appointment.entity';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  findAll(): Promise<Appointment[]> {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Appointment> {
    return this.appointmentsService.findOne(id);
  }

  @Post()
  create(@Body() appointment: Appointment): Promise<Appointment> {
    return this.appointmentsService.create(appointment);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() appointment: Appointment,
  ): Promise<void> {
    return this.appointmentsService.update(id, appointment);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.appointmentsService.remove(id);
  }
}
