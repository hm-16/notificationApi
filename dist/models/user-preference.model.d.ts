export declare enum FREQUENCY {
    DAILY = "daily",
    WEEKLY = "weekly",
    MONTHLY = "monthly",
    NEVER = "never"
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
export declare class UserPreference {
    userId: string;
    email: string;
    preferences: preferenceObject;
    timezone: string;
}
export declare const userPreferenceSchema: import("mongoose").Schema<UserPreference, import("mongoose").Model<UserPreference, any, any, any, import("mongoose").Document<unknown, any, UserPreference> & UserPreference & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserPreference, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserPreference>> & import("mongoose").FlatRecord<UserPreference> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
