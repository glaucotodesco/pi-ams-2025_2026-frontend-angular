import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-generic',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class ModalGenericComponent {
  @Input() title: string = 'Título';
  @Input() actionText: string = 'Confirmar';
  @Input() actionText2: string = 'Cancelar';
  @Input() actionFunction: () => void = () => { };

  @ViewChild('content', { static: true }) content!: TemplateRef<any>;

  constructor(public modalService: NgbModal) { }

  open() {
    this.modalService.open(this.content, { centered: true });
  }

  onAction() {
    this.actionFunction();
    this.modalService.dismissAll();
  }
}
