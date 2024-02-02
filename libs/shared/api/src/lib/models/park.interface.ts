import { IAttraction } from './attraction.interface';

export interface IPark {
  id: string;
  name: string;
  description: string;
  price: number;
  FamilyFocussed: boolean;
  address: string;
  attractions: IAttraction[];
}

export type ICreatePark = Pick<
  IPark,
  | 'name'
  | 'description'
  | 'price'
  | 'FamilyFocussed'
  | 'address'
  | 'attractions'
>;
export type IUpdatePark = Partial<Omit<ICreatePark, 'id'>>;
export type IUpsertPark = IPark;
