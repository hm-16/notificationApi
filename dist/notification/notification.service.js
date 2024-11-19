"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const notification_log_model_1 = require("../models/notification-log.model");
let NotificationService = class NotificationService {
    constructor(notificationLogModel) {
        this.notificationLogModel = notificationLogModel;
    }
    async sendNotificationAndLog(notification) {
        const notificationLog = new this.notificationLogModel({
            userId: notification.userId,
            type: notification.type,
            channel: notification.channel,
            status: 'sent',
            sentAt: new Date(),
            metadata: notification.content,
        });
        return notificationLog.save();
    }
    async getUserNotificationLogs(id) {
        return this.notificationLogModel.find({ userId: id }).exec();
    }
    async getNotificationStats() {
        const totalSent = await this.notificationLogModel
            .countDocuments({ status: 'sent' })
            .exec();
        const totalFailed = await this.notificationLogModel
            .countDocuments({ status: 'failed' })
            .exec();
        return {
            sent: totalSent,
            failed: totalFailed,
        };
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(notification_log_model_1.NotificationLog.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], NotificationService);
//# sourceMappingURL=notification.service.js.map