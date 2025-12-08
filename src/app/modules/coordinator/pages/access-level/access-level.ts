import { Component, OnInit } from '@angular/core';
import { AccessLevelProps } from '../../../../interfaces/AccessLevelProps';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccessLevelService } from '../../../../services/access-level/access-level-service';

@Component({
  selector: 'app-access-level',
  templateUrl: './access-level.html',
  styleUrls: ['./access-level.css'],
  standalone: false,
})
export class AccessLevelPage implements OnInit {
  accessLevels: AccessLevelProps[] = [];
  accessLevel: AccessLevelProps = {} as AccessLevelProps;

  columns = ['id', 'Descrição', 'Ações'];

  formGroupAccessLevel: FormGroup;
  isEditing = false;

  page = 1;
  pageSize = 8;
  collectionSize = 0;
  searchTerm = '';
  showSearch = false;

  constructor(
    private accessLevelService: AccessLevelService,
    formBuilder: FormBuilder
  ) {
    this.formGroupAccessLevel = formBuilder.group({
      id: [null],
      level: [1],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    });
  }

  ngOnInit(): void {
    this.loadAccessLevels();
  }

  loadAccessLevels() {
    this.accessLevelService.getAll().subscribe({
      next: (data) => {
        this.accessLevels = data;
        this.collectionSize = data.length;
      },
      error: () => console.error('Error loading access levels'),
    });
  }

  edit(accessLevel: AccessLevelProps) {
    this.isEditing = true;
    this.accessLevel = accessLevel;

    this.formGroupAccessLevel.patchValue({
      id: accessLevel.id,
      level: accessLevel.level,
      description: accessLevel.description,
    });
  }

  save() {
    if (!this.formGroupAccessLevel.valid) return;

    const accessLevelRequest = this.formGroupAccessLevel.value;

    if (this.isEditing) {
      this.accessLevelService.update(accessLevelRequest).subscribe({
        complete: () => {
          this.loadAccessLevels();
          this.reset();
        },
      });
    } else {
      this.accessLevelService.create(accessLevelRequest).subscribe({
        next: () => {
          this.loadAccessLevels();
          this.reset();
        },
      });
    }
  }

  reset() {
    this.formGroupAccessLevel.reset();
    this.isEditing = false;
    this.accessLevel = {} as AccessLevelProps;
  }

  delete(accessLevel: AccessLevelProps) {
    if (!confirm(`Certeza que deseja remover o nível de acesso ${accessLevel.description}?`)) return;

    this.accessLevelService.delete(accessLevel).subscribe({
      next: () => (this.accessLevels = this.accessLevels.filter((al) => al.id !== accessLevel.id)),
      error: () => alert(`Erro ao remover o nível de acesso ${accessLevel.description}`),
    });
  }

  get filteredAccessLevels() {
    const filtered = this.accessLevels.filter((al) =>
      al.description.toLowerCase().includes(this.searchTerm.toLowerCase())
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
