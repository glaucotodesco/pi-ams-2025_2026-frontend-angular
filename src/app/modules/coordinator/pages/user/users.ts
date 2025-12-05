import { Component, OnInit } from '@angular/core';
import { UserProps } from '../../../../interfaces/UserProps';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './users.html',
  styleUrls: ['./users.css'],
  standalone: false,
})
export class UsersPage implements OnInit {
  users: UserProps[] = [];
  user: UserProps = {} as UserProps;
  deleteUser: UserProps = {} as UserProps;

  columns = ['id', 'Nome', 'Email', ''];

  formGroupUser: FormGroup;
  isEditing: boolean = false;

  page = 1;
  pageSize = 8;
  collectionSize = 0;
  searchTerm = '';
  showSearch = false;

  constructor(
    private userService: UserService,
    formBuilder: FormBuilder
  ) {
    this.formGroupUser = formBuilder.group({
      id: [''],
      name: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(100)]],
      email: ['',[Validators.email,Validators.minLength(3), Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        this.collectionSize = data.length;
      },
      error: () => console.error('Error loading users'),
    });
  }

  edit(user: UserProps) {
    this.isEditing = true;
    this.user = user;
    this.formGroupUser.setValue(this.user);
  }

  save() {
    if (!this.formGroupUser.valid) return;
    const user: UserProps = this.formGroupUser.value;
    if (this.isEditing) {
      this.userService.update(user).subscribe({
        complete: () => {
          this.loadUsers();
          this.reset();
        },
      });
    } else {
      this.userService.create(user).subscribe({
        next: (data) => {
          this.users.push(data);
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
    if (!confirm(`Certeza que deseja remover o usuário ${user.name}`))
      return;

    this.deleteUser = user;
    this.userService.delete(user).subscribe({
      next: () => {
        this.users = this.users.filter((u) => u !== user);
      },
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
