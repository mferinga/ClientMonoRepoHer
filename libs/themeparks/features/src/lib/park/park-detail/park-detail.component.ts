import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParkService } from '../park.service';
import { IPark } from '@client-nx-her/shared/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'client-nx-her-park-detail',
  templateUrl: './park-detail.component.html',
  styleUrls: ['./park-detail.component.css'],
})
export class ParkDetailComponent implements OnInit, OnDestroy {
  park: IPark | null = null;
  subscription: Subscription | undefined = undefined;

  constructor(private parkService: ParkService) {}

  ngOnInit(): void {
    this.subscription = this.parkService.read('1').subscribe((result) => {
      console.log(`results: ${result}`);
      this.park = result;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
