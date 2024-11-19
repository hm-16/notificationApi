import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SendNotificationDto } from './send-notification.dto';
import { NotificationLog } from 'src/models/notification-log.model';

@Controller('api/notifications')
export class NotificationController {
  constructor(private notificationLogService: NotificationService) {}

  @Post('send')
  async sendNotification(
    @Body()
    notification: SendNotificationDto,
  ): Promise<NotificationLog> {
    return this.notificationLogService.sendNotificationAndLog(notification);
  }

  @Get(':userId/logs')
  async getNotificationLogsByUserId(
    @Param('userId')
    userId: string,
  ): Promise<NotificationLog[]> {
    return this.notificationLogService.getUserNotificationLogs(userId);
  }

  @Get('stats')
  async getNotifiationStats() {
    return this.notificationLogService.getNotificationStats();
  }
}
