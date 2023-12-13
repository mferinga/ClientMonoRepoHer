import { Component } from '@angular/core';
import { ParkService } from '../park.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPark } from '@client-nx-her/shared/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'client-nx-her-park-edit',
  templateUrl: './park-edit.component.html',
  styleUrl: './park-edit.component.css',
})
export class ParkEditComponent {
  park: IPark | undefined | null = null;
  subscription: Subscription | undefined = undefined;
  id: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private parkService: ParkService
  ) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id')) + '';
      if (this.id != undefined) {
        this.subscription = this.parkService
          .read(this.id)
          .subscribe((result) => {
            console.log('record by id is: ', result);
            this.park = result;
          });
      } else {
        console.log('New park record');
        this.park = undefined;
      }
    });
  }

  save(): void {
    const name = (document.getElementById('park-name') as HTMLInputElement)
      .value;
    const description = (
      document.getElementById('park-description') as HTMLInputElement
    ).value;
    const price = Number(
      (document.getElementById('park-price') as HTMLInputElement).value
    );
    const familyFocussed = Boolean(
      (document.getElementById('park-is-family-focussed') as HTMLInputElement)
        .checked
    );
    const address = (
      document.getElementById('park-address') as HTMLInputElement
    ).value;

    if (this.id != undefined) {
      this.parkService.edit({
        id: this.id,
        name: name,
        description: description,
        price: price,
        FamilyFocussed: familyFocussed,
        address: address,
      });
    } else {
      this.parkService.create({
        id: Math.floor(Math.random() * 10000) + '',
        name: name,
        description: description,
        price: price,
        FamilyFocussed: familyFocussed,
        address: address,
      });
    }
    this.router.navigate(['../'], {
      relativeTo: this.route,
    });
  }

  navigateToParkList(): void {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }
}
