import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radios',
  standalone: false,
  templateUrl: './radios.html',
  styleUrl: './radios.css'
})
export class Radios {
   @Input()
    label: string = '';
   @Input()
    value: string = '';
   @Input()
   name: string = '';
}
