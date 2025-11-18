import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CourseProps {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly apiUrl = 'http://localhost:8080/courses';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CourseProps[]> {
    return this.http.get<CourseProps[]>(this.apiUrl);
  }

  getById(id: number): Observable<CourseProps> {
    return this.http.get<CourseProps>(`${this.apiUrl}/${id}`);
  }

  create(course: Omit<CourseProps, 'id'>): Observable<CourseProps> {
    return this.http.post<CourseProps>(this.apiUrl, course);
  }

  update(id: number, course: CourseProps): Observable<CourseProps> {
    return this.http.put<CourseProps>(`${this.apiUrl}/${id}`, course);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
