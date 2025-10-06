import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Output() buttonClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    const baseClass = 'btn';
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
