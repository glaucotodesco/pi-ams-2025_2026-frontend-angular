import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() label: string = 'Default';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() primary: boolean = false;
  @Input() backgroundColor?: string;

  @Output() onClick = new EventEmitter<Event>();

  get classes() {
    return [
      'app-button',
      this.primary ? 'app-button--primary' : 'app-button--secondary',
      `app-button--${this.size}`,
    ].join(' ');
  }
}
