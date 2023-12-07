import { Route } from '@angular/router';
import { HomeComponent } from 'libs/themeparks/features/src/lib/home/home.component';
import { ParkListComponent } from 'libs/themeparks/features/src/lib/park/park-list/park-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  // },
  {
    path: 'parks',
    component: ParkListComponent,
  },
];
