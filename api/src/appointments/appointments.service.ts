// src/appointments/appointments.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentsRepository: Repository<Appointment>,
  ) {}

  findAll(): Promise<Appointment[]> {
    return this.appointmentsRepository.find();
  }

  findOne(id: number): Promise<Appointment> {
    return this.appointmentsRepository.findOne({ where: { id } });
  }

  create(appointment: Appointment): Promise<Appointment> {
    return this.appointmentsRepository.save(appointment);
  }

  async update(id: number, appointment: Appointment): Promise<void> {
    await this.appointmentsRepository.update(id, appointment);
  }

  async remove(id: number): Promise<void> {
    await this.appointmentsRepository.delete(id);
  }
}
