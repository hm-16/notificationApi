import {
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class NotificationContentDto {
  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  body: string;
}

export class SendNotificationDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEnum(['marketing', 'newsletter', 'updates'], { message: 'Invalid type' })
  @IsNotEmpty()
  type: 'marketing' | 'newsletter' | 'updates';

  @IsEnum(['email', 'sms', 'push'], { message: 'Invalid channel' })
  @IsNotEmpty()
  channel: 'email' | 'sms' | 'push';

  @IsObject()
  @ValidateNested()
  @Type(() => NotificationContentDto)
  content: NotificationContentDto;
}
