import { Component, Input } from '@angular/core';

@Component({
  selector: 'Card',
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
  standalone: false,
})
export class CardComponent {
  @Input() class = '';
}