import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsTimezoneConstraint implements ValidatorConstraintInterface {
    validate(value: string): boolean;
    defaultMessage(): string;
}
export declare function IsTimezone(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
