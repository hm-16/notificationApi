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
exports.UpdatePreferenceDto = void 0;
const class_validator_1 = require("class-validator");
const timezone_validator_1 = require("../validators/timezone.validator");
class UpdatePreferenceDto {
}
exports.UpdatePreferenceDto = UpdatePreferenceDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePreferenceDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdatePreferenceDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpdatePreferenceDto.prototype, "preferences", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, timezone_validator_1.IsTimezone)({ message: 'Invalid timezone format' }),
    __metadata("design:type", String)
], UpdatePreferenceDto.prototype, "timezone", void 0);
//# sourceMappingURL=update-preference.dto.js.map