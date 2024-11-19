import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationLogSchema } from 'src/models/notification-log.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'NotificationLog', schema: NotificationLogSchema },
    ]),
  ],
  providers: [NotificationService],
  controllers: [NotificationController],
})
export class NotificationModule {}
