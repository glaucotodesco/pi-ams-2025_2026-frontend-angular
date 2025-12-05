import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProps } from '../../interfaces/UserProps';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<UserProps[]> {
    return this.http.get<UserProps[]>(this.apiUrl);
  }

  getById(user: UserProps): Observable<UserProps> {
    return this.http.get<UserProps>(`${this.apiUrl}/${user.id}`);
  }

  create(user: UserProps): Observable<UserProps> {
    return this.http.post<UserProps>(this.apiUrl, user);
  }

  update(user: UserProps): Observable<UserProps> {
    return this.http.put<UserProps>(`${this.apiUrl}/${user.id}`, user);
  }

  delete(user: UserProps): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${user.id}`);
  }
}
