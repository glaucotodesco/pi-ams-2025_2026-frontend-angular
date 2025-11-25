import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  standalone: false,
  templateUrl: './page-layout.html',
})
export class PageLayout {
  @Input() title: string = '';
  @Input() paddingClass: string = '';
  @Input() marginClass: string = '';
  @Input() fluid: boolean = false;

  getThickLineWidth(title: HTMLElement): number {
    const width = title?.offsetWidth ?? 100;
    const containerWidth = title?.parentElement?.offsetWidth ?? 100;

    return (width / containerWidth) * 100 + 1;
  }
}