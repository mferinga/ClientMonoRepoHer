import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParkService } from '../park.service';
import { IPark } from '@client-nx-her/shared/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'client-nx-her-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css'],
})
export class ParkListComponent implements OnInit, OnDestroy {
  parks: IPark[] | null = null;
  subscription: Subscription | undefined = undefined;

  constructor(private parkService: ParkService) {}

  ngOnInit(): void {
    this.subscription = this.parkService.list().subscribe((results) => {
      this.parks = results;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
