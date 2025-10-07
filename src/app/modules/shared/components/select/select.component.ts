import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() itens: string[] = [''];
  @Input() selectedItem: string = 'Select';

  @Output() selectedItemChange = new EventEmitter<string>();

  selectItem(item: string) {
    this.selectedItem = item;
    this.selectedItemChange.emit(item);
  }
}
