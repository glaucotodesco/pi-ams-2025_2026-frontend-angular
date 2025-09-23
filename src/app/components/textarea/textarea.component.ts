import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})

export class TextareaComponent {
  @Input() label: string = '';               // Texto da label
  @Input() showLabel: boolean = true;        // Mostrar/ocultar label
  @Input() disabled: boolean = false;        // Ativar/desativar
  @Input() rows: number = 4;                 // Número de linhas
  @Input() cols: number = 40;                // Número de colunas
  @Input() placeholder: string = 'Digite aqui...'; // Placeholder
}
