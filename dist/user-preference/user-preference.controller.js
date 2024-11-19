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
exports.UserPreferenceController = void 0;
const common_1 = require("@nestjs/common");
const user_preference_service_1 = require("./user-preference.service");
const create_preference_dto_1 = require("./create-preference.dto");
const update_preference_dto_1 = require("./update-preference.dto");
let UserPreferenceController = class UserPreferenceController {
    constructor(userPreferenceService) {
        this.userPreferenceService = userPreferenceService;
    }
    async createUserPreference(preference) {
        return this.userPreferenceService.createPreference(preference);
    }
    async getUserPreferences(userId) {
        return this.userPreferenceService.getPreference(userId);
    }
    async updateUserPreference(id, preference) {
        return this.userPreferenceService.updateByUserId(id, preference);
    }
    async deleteUserPreference(id) {
        return this.userPreferenceService.deleteByUserId(id);
    }
};
exports.UserPreferenceController = UserPreferenceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_preference_dto_1.CreatePreferenceDto]),
    __metadata("design:returntype", Promise)
], UserPreferenceController.prototype, "createUserPreference", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPreferenceController.prototype, "getUserPreferences", null);
__decorate([
    (0, common_1.Patch)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_preference_dto_1.UpdatePreferenceDto]),
    __metadata("design:returntype", Promise)
], UserPreferenceController.prototype, "updateUserPreference", null);
__decorate([
    (0, common_1.Delete)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPreferenceController.prototype, "deleteUserPreference", null);
exports.UserPreferenceController = UserPreferenceController = __decorate([
    (0, common_1.Controller)('api/preferences'),
    __metadata("design:paramtypes", [user_preference_service_1.UserPreferenceService])
], UserPreferenceController);
//# sourceMappingURL=user-preference.controller.js.map