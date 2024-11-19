import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum FREQUENCY {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  NEVER = 'never',
}
export type preferenceObject = {
  marketing: boolean;
  newsletter: boolean;
  updates: boolean;
  frequency: FREQUENCY;
  channels: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
};

@Schema({
  timestamps: true,
})
export class UserPreference {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, type: Object })
  preferences: preferenceObject;

  @Prop()
  timezone: string;
}

export const userPreferenceSchema =
  SchemaFactory.createForClass(UserPreference);
