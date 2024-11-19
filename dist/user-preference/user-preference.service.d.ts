import { UserPreference } from 'src/models/user-preference.model';
import * as mongoose from 'mongoose';
import { CreatePreferenceDto } from './create-preference.dto';
export declare class UserPreferenceService {
    private userPreferenceModel;
    constructor(userPreferenceModel: mongoose.Model<UserPreference>);
    createPreference(preference: CreatePreferenceDto): Promise<UserPreference>;
    getPreference(id: string): Promise<UserPreference[]>;
    updateByUserId(id: string, preference: UserPreference): Promise<UserPreference>;
    deleteByUserId(id: string): Promise<mongoose.DeleteResult>;
}
