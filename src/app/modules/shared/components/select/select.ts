import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.html',
  styleUrls: ['./select.css']
})
export class SelectComponent {
  @Input() itens: (string | number | any)[] = [];
  @Input() selectedItem: string | number | any = '';
  @Input() labelKey: string = ''; // chave do objeto para exibir no label
  @Input() valueKey: string = ''; // chave do objeto para usar como value
  @Input() placeholder: string = 'Selecione...'; // placeholder do select

  @Output() selectedItemChange = new EventEmitter<string | number | any>();

  /**
   * Obtém o texto a exibir do item
   * Se for string/number, retorna a própria string
   * Se for objeto, usa a chave labelKey
   */
  getItemLabel(item: string | number | any): string {
    if (typeof item === 'string' || typeof item === 'number') {
      return String(item);
    }
    return this.labelKey ? item[this.labelKey] : JSON.stringify(item);
  }

  /**
   * Obtém o value do item para usar no atributo value
   * Se for string/number, retorna a própria string
   * Se for objeto e valueKey está definido, retorna o valor da chave
   * Se for objeto e valueKey não está definido, retorna o índice
   */
  getItemValue(item: string | number | any, index: number): string {
    if (typeof item === 'string' || typeof item === 'number') {
      return String(item);
    }
    return this.valueKey ? String(item[this.valueKey]) : String(index);
  }

  /**
   * Obtém o texto a exibir do item selecionado
   */
  getSelectedLabel(): string {
    if (!this.selectedItem && this.selectedItem !== 0) {
      return this.placeholder;
    }
    return this.getItemLabel(this.selectedItem);
  }

  /**
   * Trata a mudança do select
   */
  onSelectionChange(event: any) {
    const value = event.target.value;
    
    // Se for string/número, verifica se é o índice ou o valor direto
    let selectedValue = value;
    
    // Tenta encontrar o item correspondente
    const item = this.itens[parseInt(value)];
    if (item !== undefined) {
      // Se encontrou pelo índice, emite o item ou seu value
      selectedValue = this.valueKey && typeof item === 'object' ? item[this.valueKey] : item;
    } else {
      // Tenta encontrar pelo valueKey se for número
      const foundItem = this.itens.find(i => {
        if (typeof i === 'string' || typeof i === 'number') {
          return String(i) === value;
        }
        return this.valueKey ? String(i[this.valueKey]) === value : false;
      });
      selectedValue = foundItem !== undefined ? foundItem : value;
    }

    this.selectedItem = selectedValue;
    this.selectedItemChange.emit(selectedValue);
  }

  /**
   * Verifica se um item está selecionado
   */
  isSelected(item: string | number | any, index: number): boolean {
    if (typeof item === 'string' || typeof item === 'number') {
      return String(item) === String(this.selectedItem);
    }
    if (this.valueKey) {
      return item[this.valueKey] === this.selectedItem;
    }
    return item === this.selectedItem;
  }
}
