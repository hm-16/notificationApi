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
exports.UserPreferenceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_preference_model_1 = require("../models/user-preference.model");
const mongoose = require("mongoose");
let UserPreferenceService = class UserPreferenceService {
    constructor(userPreferenceModel) {
        this.userPreferenceModel = userPreferenceModel;
    }
    async createPreference(preference) {
        const res = await this.userPreferenceModel.create(preference);
        return res;
    }
    async getPreference(id) {
        const preference = await this.userPreferenceModel.find({ userId: id });
        if (!preference) {
            throw new common_1.NotFoundException('User Pereference not found.');
        }
        return preference;
    }
    async updateByUserId(id, preference) {
        return this.userPreferenceModel.findOneAndUpdate({ userId: id }, preference);
    }
    async deleteByUserId(id) {
        return this.userPreferenceModel.deleteOne({ userId: id });
    }
};
exports.UserPreferenceService = UserPreferenceService;
exports.UserPreferenceService = UserPreferenceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_preference_model_1.UserPreference.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], UserPreferenceService);
//# sourceMappingURL=user-preference.service.js.map