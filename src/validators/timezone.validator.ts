import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import * as moment from 'moment-timezone';

@ValidatorConstraint({ async: false })
export class IsTimezoneConstraint implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    return moment.tz.names().includes(value);
  }

  defaultMessage(): string {
    return 'Invalid timezone. Use a valid IANA timezone string.';
  }
}

export function IsTimezone(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsTimezoneConstraint,
    });
  };
}
