import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesModule } from '@client-nx-her/themeparks/features';

@Component({
  standalone: true,
  imports: [RouterModule, FeaturesModule],
  selector: 'client-nx-her-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client-nx-her';
}
