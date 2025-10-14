import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';

export interface Teacher {
  foto: string;
  nome: string;
  tipo: string;
  telefone: string;
  email: string;
  componentes: string;
}

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NgbPaginationModule],
})
export class TeacherPageComponent {
  @Input() teachers: Teacher[] = [];
  @Input() page = 1;
  @Input() pageSize = 8;
  @Input() collectionSize = 0;
  @Input() searchTerm = '';

  showSearch = false; // controla visibilidade do input

  get teachersFiltrados(): Teacher[] {
    const filtered = this.teachers.filter(t =>
      t.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.collectionSize = filtered.length;
    return filtered.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  deletar(teacher: Teacher) {
    this.teachers = this.teachers.filter(t => t !== teacher);
    this.page = 1;
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchTerm = ''; // limpa o input ao fechar
    }
  }

  refreshTeachers() {
    this.collectionSize = this.teachers.length;
  }
}