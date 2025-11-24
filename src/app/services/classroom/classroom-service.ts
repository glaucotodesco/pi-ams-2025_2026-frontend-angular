import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassroomProps } from '../../interfaces/ClassroomProps';


@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private apiUrl = 'http://localhost:8080/classrooms';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ClassroomProps[]> {
    return this.http.get<ClassroomProps[]>(this.apiUrl);
  }

  getById(classroom: ClassroomProps): Observable<ClassroomProps> {
    return this.http.get<ClassroomProps>(`${this.apiUrl}/${classroom.id}`);
  }

  create(classroom: ClassroomProps): Observable<ClassroomProps> {
    return this.http.post<ClassroomProps>(this.apiUrl, classroom);
  }

  update(classroom: ClassroomProps): Observable<ClassroomProps> {
    return this.http.put<ClassroomProps>(`${this.apiUrl}/${classroom.id}`, classroom);
  }

  delete(classroom: ClassroomProps): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${classroom.id}`);
  }
}
