import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgNames } from '@shared/interfaces/svg.interface';
import { iconList } from '@shared/utils/iconList';

@Component({
  selector: 'app-svg-wrapper',
  template: `<div [innerHTML]="filteredSvg()"></div>`,
})
export class SvgWrapperComponent {
  private readonly sanitizer = inject(DomSanitizer);
  svgTitle = input.required<keyof SvgNames>();

  filteredSvg = computed<SafeHtml>(() => {
    return this.sanitizer.bypassSecurityTrustHtml(iconList[this.svgTitle()]);
  });
}
