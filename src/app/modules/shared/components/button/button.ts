import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
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
