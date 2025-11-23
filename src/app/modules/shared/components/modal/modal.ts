import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-generic',
  standalone: false,
  templateUrl: './modal.html',
})

export class ModalComponent {
  @Input() title: string = 'Título';
  @Input() actionText: string = 'Confirmar';
  @Input() actionText2: string = 'Cancelar';
  @Input() actionFunction: () => void = () => { };
  @Input() canCloseOnAction: boolean = false;

  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  @ViewChild('content', { static: true }) content!: TemplateRef<any>;

  constructor(public modalService: NgbModal) { }

  open() {
    this.modalService.open(this.content, { centered: true });
  }

  onAction() {
    this.actionFunction();
    this.confirmed.emit();
    if(this.canCloseOnAction) this.modalService.dismissAll();
  }

  onCancel() {
    this.cancelled.emit();
    this.modalService.dismissAll();
  }
}
