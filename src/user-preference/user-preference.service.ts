import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserPreference } from 'src/models/user-preference.model';
import * as mongoose from 'mongoose';
import { CreatePreferenceDto } from './create-preference.dto';

@Injectable()
export class UserPreferenceService {
  constructor(
    @InjectModel(UserPreference.name)
    private userPreferenceModel: mongoose.Model<UserPreference>,
  ) {}

  async createPreference(
    preference: CreatePreferenceDto,
  ): Promise<UserPreference> {
    const res = await this.userPreferenceModel.create(preference);
    return res;
  }

  async getPreference(id: string): Promise<UserPreference[]> {
    const preference = await this.userPreferenceModel.find({ userId: id });
    if (!preference) {
      throw new NotFoundException('User Pereference not found.');
    }
    return preference;
  }

  async updateByUserId(
    id: string,
    preference: UserPreference,
  ): Promise<UserPreference> {
    return this.userPreferenceModel.findOneAndUpdate(
      { userId: id },
      preference,
    );
  }

  async deleteByUserId(id: string): Promise<mongoose.DeleteResult> {
    return this.userPreferenceModel.deleteOne({ userId: id });
  }
}
