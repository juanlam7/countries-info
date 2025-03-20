import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgWrapperComponent } from '../svg-wrapper/svg-wrapper.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [RouterLink, SvgWrapperComponent],
})
export class FooterComponent {
  capitals = ['Buenos Aires', 'Paris', 'Berlin', 'Amsterdam'];
  countries = ['Venezuela', 'España', 'Colombia', 'Reino Unido'];
  regions = ['America', 'Europa', 'Asia', 'Africa'];
}
