import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CourseProps } from '../../../../interfaces/CourseProps';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
  standalone: false,
})

export class Courses {
  columns: string[] = ["id","Nome", "Modalidade", "Eixo Tecnologico", "Num Componentes", ""];
  @Input() courses: CourseProps[] = [
   { id: 1, 
        name: 'Analise em Desenvolvimento de Sistemas', 
        modality: 'Presencial', 
        technologicalAxis: 'informação e comunicação', 
        componentsCount: 28
       },

      {  id: 2, 
        name: 'gestão Empresarial', 
        modality: 'Presencial', 
        technologicalAxis: 'Gestão e Negócios', 
        componentsCount: 30
      },

      {  id: 3, 
        name: 'matematica', 
        modality: 'Presencial', 
        technologicalAxis: 'Matemática e suas Tecnologias', 
        componentsCount: 25
      },

      {  id: 4, 
        name: 'Gestão de Eventos', 
        modality: 'hibrido', 
        technologicalAxis: 'informação e comunicação', 
        componentsCount: 35 
      },
  ];
  @Input() page = 1;
  @Input() pageSize = 8;
  @Input() collectionSize = 0;
  @Input() searchTerm = '';

  showSearch = false; // controla visibilidade do input

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
    if (!this.showSearch) {
      this.searchTerm = '';
    }
  }

  refreshCourses() {
    this.collectionSize = this.courses.length;
  }


}