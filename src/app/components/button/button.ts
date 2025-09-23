import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;
  @Input() label = 'Button';
  @Input() icon?: string;

  @Output() onClick = new EventEmitter<Event>();

  get classes(): string[] {
    const base = ['storybook-button', `storybook-button--${this.size}`];
    if (this.disabled) {
      base.push('storybook-button--disabled');
    } else {
      base.push(`storybook-button--${this.variant}`);
    }
    return base;
  }

  handleClick(event: Event) {
    if (!this.disabled) {
      this.onClick.emit(event);
    }
  }
}