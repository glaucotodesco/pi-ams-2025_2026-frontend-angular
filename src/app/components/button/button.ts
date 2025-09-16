import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  // tipo
  @Input() variant: 'primary' | 'secondary' = 'primary';
  // tamanho
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  // define se o botão ta desabilitado
  @Input() disabled = false;

  // texto do botão
  @Input() label = 'Button';

  // icone opcional
  @Input() icon?: string;

  // evento ao clicar
  @Output() onClick = new EventEmitter<Event>();

  // classes dinâmicas do botão
  get classes(): string[] {
    const base = ['storybook-button', `storybook-button--${this.size}`];
    if (this.disabled) {
      base.push('storybook-button--disabled');
    } else {
      base.push(`storybook-button--${this.variant}`);
    }
    return base;
  }

  /// dispara o evento de clique somente se não tiver desabilitado
  handleClick(event: Event) {
    if (!this.disabled) {
      this.onClick.emit(event);
    }
  }
}