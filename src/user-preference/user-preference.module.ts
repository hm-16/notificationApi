import { Module } from '@nestjs/common';
import { UserPreferenceService } from './user-preference.service';
import { UserPreferenceController } from './user-preference.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userPreferenceSchema } from 'src/models/user-preference.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserPreference', schema: userPreferenceSchema },
    ]),
  ],
  providers: [UserPreferenceService],
  controllers: [UserPreferenceController],
})
export class UserPreferenceModule {}
