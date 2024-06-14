// src/services/services.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private readonly servicesRepository: Repository<Service>,
  ) {}

  findAll(): Promise<Service[]> {
    return this.servicesRepository.find();
  }

  findOne(id: number): Promise<Service> {
    return this.servicesRepository.findOne({ where: { id } });
  }

  create(service: Service): Promise<Service> {
    return this.servicesRepository.save(service);
  }

  async update(id: number, service: Service): Promise<void> {
    await this.servicesRepository.update(id, service);
  }

  async remove(id: number): Promise<void> {
    await this.servicesRepository.delete(id);
  }
}
