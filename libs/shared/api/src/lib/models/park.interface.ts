export interface IPark {
  id: string; //kan nog een ID (als type) worden inplaatst van een string
  name: string;
  description: string;
  price: number;
  FamilyFocussed: boolean;
  address: string;
}

export type ICreatePark = Pick<
  IPark,
  'name' | 'description' | 'price' | 'FamilyFocussed' | 'address'
>;
export type IUpdatePark = Partial<Omit<ICreatePark, 'id'>>;
export type IUpsertPark = IPark;
