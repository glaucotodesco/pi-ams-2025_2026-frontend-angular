import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.html',
  styleUrls: ['./input.css']
})
export class InputComponent {

 @Input() type: string = 'text';
  @Input() label?: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() autocomplete: string = 'off';
  @Input() class: string = ''; 

  @Output() valueChange = new EventEmitter<string>();
  @Output() focusEvent = new EventEmitter<void>();
  @Output() blurEvent = new EventEmitter<void>();

  focused: boolean = false;

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

  onFocus() {
    this.focused = true;
    this.focusEvent.emit();
  }

  onBlur() {
    this.focused = false;
    this.blurEvent.emit();
  }
}

