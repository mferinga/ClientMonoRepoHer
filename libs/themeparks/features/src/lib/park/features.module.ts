import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ParkDetailComponent } from './park-detail/park-detail.component';
import { ParkListComponent } from './park-list/park-list.component';
import { ParkService } from './park.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ParkListComponent, ParkDetailComponent],
  providers: [ParkService],
  exports: [ParkListComponent, ParkDetailComponent],
})
export class FeaturesModule {}
