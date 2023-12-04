import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ParkListComponent } from './features/themepark/themepark-list/themepark-list.component';

export const appRoutes: Route[] = [
  {
    path: 'parks',
    component: ParkListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
