import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseProps } from '../../interfaces/CourseProps';


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

  create(course: CourseProps): Observable<CourseProps> {
    return this.http.post<CourseProps>(this.apiUrl, course);
  }

  update( course: CourseProps): Observable<CourseProps> {
    return this.http.put<CourseProps>(`${this.apiUrl}/${course.id}`, course);
  }

  delete(course: CourseProps): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${course.id}`);
  }
}
