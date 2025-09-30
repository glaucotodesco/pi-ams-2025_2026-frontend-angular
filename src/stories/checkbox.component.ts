import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="checkbox-container">
      <input
        type="checkbox"
        [checked]="checked"
        (change)="toggle($event)"
      />
      <span class="custom-checkbox" [class.checked]="checked">
        <svg *ngIf="checked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
          <path stroke="#fff" stroke-width="2" d="M3 8l3 3 7-7"/>
        </svg>
      </span>
      <span class="checkbox-label">{{ label }}</span>
    </label>
  `,
  styleUrls: ['./checkbox.css'],
})
export class CheckboxComponent {
  @Input() label: string = 'Opção';
  @Input() checked: boolean = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  toggle(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checkedChange.emit(target.checked);
  }
}
