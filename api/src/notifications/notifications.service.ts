// src/notifications/notifications.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationsRepository: Repository<Notification>,
  ) {}

  findAll(): Promise<Notification[]> {
    return this.notificationsRepository.find();
  }

  findOne(id: number): Promise<Notification> {
    return this.notificationsRepository.findOne({ where: { id } });
  }

  create(notification: Notification): Promise<Notification> {
    return this.notificationsRepository.save(notification);
  }

  async update(id: number, notification: Notification): Promise<void> {
    await this.notificationsRepository.update(id, notification);
  }

  async remove(id: number): Promise<void> {
    await this.notificationsRepository.delete(id);
  }
}
