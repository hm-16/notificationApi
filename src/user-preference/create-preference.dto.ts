import { IsEmail, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { preferenceObject } from 'src/models/user-preference.model';
import { IsTimezone } from 'src/validators/timezone.validator';

export class CreatePreferenceDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsObject()
  readonly preferences: preferenceObject;

  @IsNotEmpty()
  @IsTimezone({ message: 'Invalid timezone format' })
  readonly timezone: string;
}
