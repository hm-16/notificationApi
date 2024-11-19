import { UserPreferenceService } from './user-preference.service';
import { UserPreference } from 'src/models/user-preference.model';
import { CreatePreferenceDto } from './create-preference.dto';
import { UpdatePreferenceDto } from './update-preference.dto';
import { DeleteResult } from 'mongoose';
export declare class UserPreferenceController {
    private userPreferenceService;
    constructor(userPreferenceService: UserPreferenceService);
    createUserPreference(preference: CreatePreferenceDto): Promise<UserPreference>;
    getUserPreferences(userId: string): Promise<UserPreference[]>;
    updateUserPreference(id: string, preference: UpdatePreferenceDto): Promise<UserPreference>;
    deleteUserPreference(id: string): Promise<DeleteResult>;
}
