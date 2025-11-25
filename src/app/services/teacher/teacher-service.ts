import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeacherProps } from '../../interfaces/TeacherProps';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private apiUrl = 'http://localhost:8080/teachers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TeacherProps[]> {
    return this.http.get<TeacherProps[]>(this.apiUrl);
  }

  getById(teacher: TeacherProps): Observable<TeacherProps> {
    return this.http.get<TeacherProps>(`${this.apiUrl}/${teacher.id}`);
  }

  create(teacher: TeacherProps): Observable<TeacherProps> {
    return this.http.post<TeacherProps>(this.apiUrl, teacher);
  }

  update(teacher: TeacherProps): Observable<TeacherProps> {
    return this.http.put<TeacherProps>(`${this.apiUrl}/${teacher.id}`, teacher);
  }

  delete(teacher: TeacherProps): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${teacher.id}`);
  }
}
