import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SvgWrapperComponent } from "../svg-wrapper/svg-wrapper.component";

@Component({
  selector: 'app-not-found',
  imports: [SvgWrapperComponent],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  location = inject(Location);

  goBack() {
    this.location.back();
  }
}
