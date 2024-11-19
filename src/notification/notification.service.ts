import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { NotificationLog } from 'src/models/notification-log.model';
import { SendNotificationDto } from './send-notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(NotificationLog.name)
    private notificationLogModel: mongoose.Model<NotificationLog>,
  ) {}

  async sendNotificationAndLog(
    notification: SendNotificationDto,
  ): Promise<NotificationLog> {
    const notificationLog = new this.notificationLogModel({
      userId: notification.userId,
      type: notification.type,
      channel: notification.channel,
      status: 'sent',
      sentAt: new Date(),
      metadata: notification.content,
    });

    return notificationLog.save();
  }

  async getUserNotificationLogs(id: string): Promise<NotificationLog[]> {
    return this.notificationLogModel.find({ userId: id }).exec();
  }

  async getNotificationStats() {
    const totalSent = await this.notificationLogModel
      .countDocuments({ status: 'sent' })
      .exec();
    const totalFailed = await this.notificationLogModel
      .countDocuments({ status: 'failed' })
      .exec();
    return {
      sent: totalSent,
      failed: totalFailed,
    };
  }
}
