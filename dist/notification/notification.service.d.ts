import * as mongoose from 'mongoose';
import { NotificationLog } from 'src/models/notification-log.model';
import { SendNotificationDto } from './send-notification.dto';
export declare class NotificationService {
    private notificationLogModel;
    constructor(notificationLogModel: mongoose.Model<NotificationLog>);
    sendNotificationAndLog(notification: SendNotificationDto): Promise<NotificationLog>;
    getUserNotificationLogs(id: string): Promise<NotificationLog[]>;
    getNotificationStats(): Promise<{
        sent: number;
        failed: number;
    }>;
}
