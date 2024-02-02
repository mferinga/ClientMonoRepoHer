import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { IPark } from '@client-nx-her/shared/api';
import { BehaviorSubject } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { IAttraction } from 'libs/shared/api/src/lib/models/attraction.interface';

@Injectable()
export class ParkService {
  TAG = 'ParkService';

  private attractions$ = new BehaviorSubject<IAttraction[]>([
    {
      id: '0',
      name: 'Python',
      description: 'Een achtbaan met twee loopings',
      parkId: '0',
      attractionType: 'Coaster',
      rating: 7,
    },
    {
      id: '1',
      name: 'Vogel Rok',
      description: 'Een achtbaan in het donker',
      parkId: '0',
      attractionType: 'Coaster',
      rating: 6,
    },
    {
      id: '2',
      name: 'Fata Morgana',
      description: 'Een boottocht door het paleis van de sultan',
      parkId: '0',
      attractionType: 'Dark Ride',
      rating: 8,
    },
    {
      id: '3',
      name: 'Speed of Sound',
      description: 'Een achtbaan waarin je achteruit gaat',
      parkId: '1',
      attractionType: 'Coaster',
      rating: 5,
    },
    {
      id: '4',
      name: 'Goliath',
      description: 'Een achtbaan met een drop van 46 meter',
      parkId: '1',
      attractionType: 'Coaster',
      rating: 8,
    },
  ]);

  private parks$ = new BehaviorSubject<IPark[]>([
    {
      id: '0',
      name: 'Efteling',
      description: 'Een pretpark in Kaatsheuvel, gebaseerd op sprookjes',
      price: 45,
      FamilyFocussed: true,
      address: 'Europalaan 1, 5171 KW Kaatsheuvel',
      attractions: [
        this.attractions$.value[0],
        this.attractions$.value[1],
        this.attractions$.value[2],
      ],
    },
    {
      id: '1',
      name: 'Walibi',
      description: 'Een pretpark in Biddinghuizen, gefocusd op achtbanen',
      price: 40,
      FamilyFocussed: false,
      address: 'Spijkweg 30, 8256 RJ Biddinghuizen',
      attractions: [this.attractions$.value[3], this.attractions$.value[4]],
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
    park: Pick<
      IPark,
      | 'name'
      | 'description'
      | 'address'
      | 'price'
      | 'FamilyFocussed'
      | 'attractions'
    >
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

  edit(
    id: string,
    park: Pick<
      IPark,
      'name' | 'description' | 'address' | 'price' | 'FamilyFocussed'
    >
  ): IPark {
    Logger.log(`edit(${id})`, this.TAG);
    const current = this.parks$.value;
    const index = current.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Park could not be found!`);
    }
    const editedPark = { ...current[index], ...park };
    current[index] = editedPark;
    this.parks$.next(current);
    return editedPark;
  }
}
