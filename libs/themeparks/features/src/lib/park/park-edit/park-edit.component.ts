import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  navigateToParkList(): void {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }
}

//   save(): void {
//     var park = new Themepark();

//     var name = (document.getElementById('park-name') as HTMLInputElement).value;
//     var description = (
//       document.getElementById('park-description') as HTMLInputElement
//     ).value;
//     var price = Number(
//       (document.getElementById('park-price') as HTMLInputElement).value
//     );
//     var familyFocussed = Boolean(
//       (document.getElementById('park-is-family-focussed') as HTMLInputElement)
//         .checked
//     );
//     var address = (document.getElementById('park-address') as HTMLInputElement)
//       .value;
//     var parkid = this.ThemeparkService.getAllParks().length + 1;

//     if (this.parkId) {
//       parkid = this.parkId;
//       park = {
//         id: parkid,
//         name: name,
//         description: description,
//         price: price,
//         FamilyFocussed: familyFocussed,
//         Address: address,
//       };
//       this.ThemeparkService.editPark(park);
//     } else {
//       park = {
//         id: parkid,
//         name: name,
//         description: description,
//         price: price,
//         FamilyFocussed: familyFocussed,
//         Address: address,
//       };
//       this.ThemeparkService.addPark(park);
//     }

//     this.router.navigate(['..'], { relativeTo: this.route });
//   }
// }
