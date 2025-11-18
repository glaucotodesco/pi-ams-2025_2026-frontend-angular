import { Component, OnInit } from '@angular/core';
import { CourseService, CourseProps } from '../../../../services/CourseService';

@Component({
  selector: 'app-course',
  templateUrl: './course.html',
  styleUrls: ['./course.css'],
  standalone: false
})
export class Course implements OnInit {

  columns: string[] = ['id', 'Name', 'Description', ''];

  courses: CourseProps[] = [];
  page = 1;
  pageSize = 8;
  collectionSize = 0;
  searchTerm = '';
  showSearch = false;

  // usado no modal de criação (não inclui id)
  newCourse: { name: string; description: string } = { name: '', description: '' };

  // modal controlado por *ngIf
  showCreateModal = false;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getAll().subscribe({
      next: data => {
        this.courses = data;
        this.collectionSize = data.length;
      },
      error: () => alert('Error loading courses')
    });
  }

  // abrir modal
  openCreateModal() {
    this.newCourse = { name: '', description: '' };
    this.showCreateModal = true;
  }

  // fechar modal
  closeCreateModal() {
    this.showCreateModal = false;
  }

  // criar curso
  createCourse() {
    if (!this.newCourse.name || !this.newCourse.description) {
      alert('Preencha todos os campos');
      return;
    }

    // newCourse não tem id, o backend cria
    this.courseService.create(this.newCourse).subscribe({
      next: () => {
        alert('Curso criado com sucesso');
        this.loadCourses();
        this.closeCreateModal();
      },
      error: () => alert('Erro ao criar curso')
    });
  }

  // editar curso
  editCourse(id: number) {
    const course = this.courses.find(c => c.id === id);
    if (!course) return;

    const name = prompt('Novo nome:', course.name);
    const description = prompt('Nova descrição:', course.description);

    if (!name || !description) {
      alert('Campos inválidos');
      return;
    }

    const updated: CourseProps = { id, name, description };

    this.courseService.update(id, updated).subscribe({
      next: () => {
        alert('Curso atualizado com sucesso');
        this.loadCourses();
      },
      error: () => alert('Erro ao atualizar curso')
    });
  }

  // deletar curso
  deleteCourse(id: number) {
    if (!confirm('Tem certeza?')) return;

    this.courseService.delete(id).subscribe({
      next: () => {
        alert('Curso removido');
        this.loadCourses();
      },
      error: () => alert('Erro ao remover curso')
    });
  }

  get filteredCourses(): CourseProps[] {
    const filtered = this.courses.filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.collectionSize = filtered.length;
    return filtered.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) this.searchTerm = '';
  }
}
