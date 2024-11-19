"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsTimezoneConstraint = void 0;
exports.IsTimezone = IsTimezone;
const class_validator_1 = require("class-validator");
const moment = require("moment-timezone");
let IsTimezoneConstraint = class IsTimezoneConstraint {
    validate(value) {
        return moment.tz.names().includes(value);
    }
    defaultMessage() {
        return 'Invalid timezone. Use a valid IANA timezone string.';
    }
};
exports.IsTimezoneConstraint = IsTimezoneConstraint;
exports.IsTimezoneConstraint = IsTimezoneConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], IsTimezoneConstraint);
function IsTimezone(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsTimezoneConstraint,
        });
    };
}
//# sourceMappingURL=timezone.validator.js.map