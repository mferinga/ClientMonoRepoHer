import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsNumber,
} from 'class-validator';
import {
  ICreatePark,
  IUpdatePark,
  IUpsertPark,
} from '@client-nx-her/shared/api';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateParkDto implements ICreatePark {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;

  @IsBoolean()
  @IsNotEmpty()
  FamilyFocussed!: boolean;

  @IsString()
  @IsNotEmpty()
  address!: string;
}

export class UpsertUpdateDto implements IUpsertPark {
  @IsString()
  @IsNotEmpty()
  id!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;

  @IsBoolean()
  @IsNotEmpty()
  FamilyFocussed!: boolean;

  @IsString()
  @IsNotEmpty()
  address!: string;
}

export class UpdateParkDto implements IUpdatePark {
  @IsString()
  @IsOptional()
  name!: string;

  @IsString()
  @IsOptional()
  description!: string;

  @IsNumber()
  @IsOptional()
  price!: number;

  @IsBoolean()
  @IsOptional()
  FamilyFocussed!: boolean;

  @IsString()
  @IsOptional()
  address!: string;

  // @IsBoolean()
  // @IsOptional()
  // completed!: boolean;
}
