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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPreferenceSchema = exports.UserPreference = exports.FREQUENCY = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var FREQUENCY;
(function (FREQUENCY) {
    FREQUENCY["DAILY"] = "daily";
    FREQUENCY["WEEKLY"] = "weekly";
    FREQUENCY["MONTHLY"] = "monthly";
    FREQUENCY["NEVER"] = "never";
})(FREQUENCY || (exports.FREQUENCY = FREQUENCY = {}));
let UserPreference = class UserPreference {
};
exports.UserPreference = UserPreference;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserPreference.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserPreference.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Object }),
    __metadata("design:type", Object)
], UserPreference.prototype, "preferences", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserPreference.prototype, "timezone", void 0);
exports.UserPreference = UserPreference = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], UserPreference);
exports.userPreferenceSchema = mongoose_1.SchemaFactory.createForClass(UserPreference);
//# sourceMappingURL=user-preference.model.js.map