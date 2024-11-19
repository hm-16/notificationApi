import { preferenceObject } from 'src/models/user-preference.model';
export declare class CreatePreferenceDto {
    readonly userId: string;
    readonly email: string;
    readonly preferences: preferenceObject;
    readonly timezone: string;
}
