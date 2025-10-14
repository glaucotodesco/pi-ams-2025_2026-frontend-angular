import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  standalone: false,
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.css'
})
export class PageLayout {
  @Input() title: string = '';
  @Input() paddingClass: string = 'p-4';
  @Input() marginClass: string = 'my-3 mx-auto';
  @Input() fluid: boolean = false;
}
