import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrls: ['./button.css']
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Output() buttonClick = new EventEmitter<Event>();
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  get buttonClasses(): string {
    const baseClass = 'btn d-flex align-items-center gap-1';
    const variantClass =
      this.variant === 'outline' ? 'btn-outline-primary' : `btn-${this.variant}`;
    const sizeClass =
      this.size === 'sm' ? 'btn-sm' : this.size === 'lg' ? 'btn-lg' : '';
    return [baseClass, variantClass, sizeClass].filter(Boolean).join(' ');
  }

  onClick(event: Event) {
    this.buttonClick.emit(event);
  }
}
