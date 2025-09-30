import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() itens: string[] = [''];

  @Output() selectedItem: string = 'Select';

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
