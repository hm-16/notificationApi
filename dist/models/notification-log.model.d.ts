export declare class NotificationLog {
    userId: string;
    type: string;
    channel: string;
    status: string;
    sentAt?: Date;
    failureReason?: string;
    metadata: Record<string, any>;
}
export declare const NotificationLogSchema: import("mongoose").Schema<NotificationLog, import("mongoose").Model<NotificationLog, any, any, any, import("mongoose").Document<unknown, any, NotificationLog> & NotificationLog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, NotificationLog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<NotificationLog>> & import("mongoose").FlatRecord<NotificationLog> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
