import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ParkDetailComponent } from './park/park-detail/park-detail.component';
import { ParkListComponent } from './park/park-list/park-list.component';
import { ParkService } from './park/park.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [
    ParkListComponent,
    ParkDetailComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  providers: [ParkService],
  exports: [
    ParkListComponent,
    ParkDetailComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
})
export class FeaturesModule {}
