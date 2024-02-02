import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsArray,
} from 'class-validator';
import {
  ICreatePark,
  IUpdatePark,
  IUpsertPark,
} from '@client-nx-her/shared/api';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { IAttraction } from 'libs/shared/api/src/lib/models/attraction.interface';

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

  @IsArray()
  @IsNotEmpty()
  attractions!: IAttraction[];
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

  @IsArray()
  @IsNotEmpty()
  attractions!: IAttraction[];
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
