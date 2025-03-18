import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  capitals = ['Buenos Aires', 'Paris', 'Berlin', 'Amsterdam'];
  countries = ['Venezuela', 'España', 'Colombia', 'Reino Unido'];
  regions = ['America', 'Europa', 'Asia', 'Africa'];
}
