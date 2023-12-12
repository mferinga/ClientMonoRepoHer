import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParkService } from '../park.service';
import { IPark } from '@client-nx-her/shared/api';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'client-nx-her-park-detail',
  templateUrl: './park-detail.component.html',
  styleUrls: ['./park-detail.component.css'],
})
export class ParkDetailComponent implements OnInit, OnDestroy {
  park: IPark | null = null;
  subscription: Subscription | undefined = undefined;
  id: string | undefined;

  constructor(
    private parkService: ParkService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id')) + '';
      if (this.id) {
        this.subscription = this.parkService
          .read(this.id)
          .subscribe((result) => {
            console.log('record by id is: ', result);
            this.park = result;
          });
      } else {
        console.log('Error: id is undefined');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
