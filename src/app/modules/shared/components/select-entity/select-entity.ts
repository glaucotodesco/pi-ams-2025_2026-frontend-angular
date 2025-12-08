import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-entity',
  templateUrl: './select-entity.html',
  styleUrl: './select-entity.css',
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectEntityComponent),
      multi: true,
    },
  ],
})
export class SelectEntityComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = 'Selecione...';
  @Input() items: any[] = [];
  @Input() control: any;
  @Input() valueField = 'id';
  @Input() textField = 'description';
  @Input() errorMessage = 'Campo obrigatório.';

  value: any = null;
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onModelChange(newValue: any) {
    this.value = newValue;
    this.onChange(newValue);
  }
}
