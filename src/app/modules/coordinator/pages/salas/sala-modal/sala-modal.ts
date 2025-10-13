import { Component, EventEmitter, Output } from '@angular/core';

declare var bootstrap: any;


@Component({
  selector: 'app-sala-modal',
  standalone: false,
  templateUrl: './sala-modal.html',
  styleUrl: './sala-modal.css'
})
export class SalaModal {
  @Output() cadastrar = new EventEmitter<any>();
 
  sala = {
    nome: '',
    tipo: '',
    localizacao: '',
    andar: '',
    capacidade: '',
    possuiAtendimento: 'sim',
    itens: '',
    especificacoes: ''
  };
 
  limparCampos() {
    this.sala = {
      nome: '',
      tipo: '',
      localizacao: '',
      andar: '',
      capacidade: '',
      possuiAtendimento: 'sim',
      itens: '',
      especificacoes: ''
    };
  }
 
  salvar() {
    this.cadastrar.emit(this.sala);
    this.limparCampos();
 
    const modalEl = document.getElementById('salaModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl!);
    modalInstance?.hide();
  }
}