import { NotificationService } from './notification.service';
import { SendNotificationDto } from './send-notification.dto';
import { NotificationLog } from 'src/models/notification-log.model';
export declare class NotificationController {
    private notificationLogService;
    constructor(notificationLogService: NotificationService);
    sendNotification(notification: SendNotificationDto): Promise<NotificationLog>;
    getNotificationLogsByUserId(userId: string): Promise<NotificationLog[]>;
    getNotifiationStats(): Promise<{
        sent: number;
        failed: number;
    }>;
}
