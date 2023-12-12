import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { IPark } from '@client-nx-her/shared/api';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ParkService {
  TAG = 'ParkService';

  private parks$ = new BehaviorSubject<IPark[]>([
    {
      id: '0',
      name: 'Efteling',
      description: 'Een pretpark in Kaatsheuvel, gebaseerd op sprookjes',
      price: 45,
      FamilyFocussed: true,
      address: 'Europalaan 1, 5171 KW Kaatsheuvel',
    },
    {
      id: '1',
      name: 'Walibi',
      description: 'Een pretpark in Biddinghuizen, gefocusd op achtbanen',
      price: 40,
      FamilyFocussed: false,
      address: 'Spijkweg 30, 8256 RJ Biddinghuizen',
    },
  ]);

  getAll(): IPark[] {
    Logger.log('getAll', this.TAG);
    return this.parks$.value;
  }

  getOne(id: string): IPark {
    Logger.log(`getOne(${id})`, this.TAG);
    const park = this.parks$.value.find((p) => p.id === id);
    if (!park) {
      throw new NotFoundException(`Park could not be found!`);
    }
    return park;
  }

  create(
    park: Pick<IPark, 'name' | 'description' | 'address' | 'price'>
  ): IPark {
    Logger.log('create', this.TAG);
    const current = this.parks$.value;
    // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
    const newPark: IPark = {
      ...park,
      id: `park-${Math.floor(Math.random() * 10000)}`,
      FamilyFocussed: false,
    };
    this.parks$.next([...current, newPark]);
    return newPark;
  }
}
