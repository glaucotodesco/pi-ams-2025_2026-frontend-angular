import { Component, OnInit } from '@angular/core';
import { UserProps } from '../../../../interfaces/UserProps';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user/user-service';
import { AccessLevelProps } from '../../../../interfaces/AccessLevelProps';
import { AccessLevelService } from '../../../../services/access-level/access-level-service';

@Component({
  selector: 'app-user',
  templateUrl: './users.html',
  styleUrls: ['./users.css'],
  standalone: false,
})
export class UsersPage implements OnInit {
  users: UserProps[] = [];
  user: UserProps = {} as UserProps;

  columns = ['id', 'Nome', 'Email', "Nível de Acesso", 'Ações'];

  formGroupUser: FormGroup;
  isEditing = false;

  page = 1;
  pageSize = 8;
  collectionSize = 0;
  searchTerm = '';
  showSearch = false;
  accessLevels: AccessLevelProps[] = [];

  constructor(
    private userService: UserService,
    private accessLevelService: AccessLevelService,
    formBuilder: FormBuilder
  ) {
    this.formGroupUser = formBuilder.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      email: ['', [Validators.required,Validators.email, Validators.minLength(3), Validators.maxLength(100)]],
      accessLevelId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadUsers();
    this.loadAccessLevels();
  }

  loadAccessLevels() {
    this.accessLevelService.getAll().subscribe({
      next: (data) => (this.accessLevels = data),
      error: () => console.error('Error loading access levels'),
    });
  }

  loadUsers() {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        this.collectionSize = data.length;
      },
    });
  }

  edit(user: UserProps) {
    this.isEditing = true;
    this.user = user;

    this.formGroupUser.patchValue({
      id: user.id,
      name: user.name,
      email: user.email,
      accessLevelId: user.accessLevel?.id ?? null,
    });
  }

  save() {
    
    const userRequest = {
      ...this.formGroupUser.value
    };

    if (this.isEditing) {
      this.userService.update(userRequest).subscribe({
        complete: () => {
          this.loadUsers();
          this.reset();
        },
      });
    } else {
      this.userService.create(userRequest).subscribe({
        next: () => {
          this.loadUsers();
          this.reset();
        },
      });
    }
  }

  reset() {
    this.formGroupUser.reset();
    this.isEditing = false;
    this.user = {} as UserProps;
  }

  delete(user: UserProps) {
    if (!confirm(`Certeza que deseja remover o usuário ${user.name}?`)) return;

    this.userService.delete(user).subscribe({
      next: () => (this.users = this.users.filter((u) => u.id !== user.id)),
      error: () => alert(`Erro ao remover o usuário ${user.name}`),
    });
  }

  get filteredUsers() {
    const filtered = this.users.filter((s) =>
      s.name.toLowerCase().includes(this.searchTerm.toLowerCase())
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
