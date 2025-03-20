import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgWrapperComponent } from '@shared/components/svg-wrapper/svg-wrapper.component';

@Component({
  selector: 'country-top-menu',
  imports: [RouterLink, RouterLinkActive, SvgWrapperComponent],
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent {}