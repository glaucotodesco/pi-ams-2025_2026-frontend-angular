import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('pi-ams-2025_2026-frontend-angular');
  salvar() {
  alert('Função de ação executada!');
}
onModalConfirmed() {
  console.log("Modal confirmado");
}

onModalCancelled() {
  console.log("Modal cancelado");
}

}
