import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserPreferenceService } from './user-preference.service';
import { UserPreference } from 'src/models/user-preference.model';
import { CreatePreferenceDto } from './create-preference.dto';
import { UpdatePreferenceDto } from './update-preference.dto';
import { DeleteResult } from 'mongoose';

@Controller('api/preferences')
export class UserPreferenceController {
  constructor(private userPreferenceService: UserPreferenceService) {}

  @Post()
  async createUserPreference(
    @Body()
    preference: CreatePreferenceDto,
  ): Promise<UserPreference> {
    return this.userPreferenceService.createPreference(preference);
  }

  @Get(':userId')
  async getUserPreferences(
    @Param('userId')
    userId: string,
  ): Promise<UserPreference[]> {
    return this.userPreferenceService.getPreference(userId);
  }

  @Patch(':userId')
  async updateUserPreference(
    @Param('userId')
    id: string,
    @Body()
    preference: UpdatePreferenceDto,
  ): Promise<UserPreference> {
    return this.userPreferenceService.updateByUserId(id, preference);
  }

  @Delete(':userId')
  async deleteUserPreference(
    @Param('userId')
    id: string,
  ): Promise<DeleteResult> {
    return this.userPreferenceService.deleteByUserId(id);
  }
}
