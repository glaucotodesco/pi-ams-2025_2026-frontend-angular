import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TeacherProps } from '../../interfaces/TeacherProps';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {
  private apiUrl = 'http://localhost:8080/teachers';

  constructor(private http: HttpClient) { }

  getAll(): Observable<TeacherProps[]> {
    return this.http.get<TeacherProps[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<TeacherProps> {
    return this.http.get<TeacherProps>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  create(teacher: TeacherProps): Observable<TeacherProps> {
    return this.http.post<TeacherProps>(this.apiUrl, teacher)
      .pipe(catchError(this.handleError));
  }

  update(id: number, teacher: TeacherProps): Observable<TeacherProps> {
    return this.http.put<TeacherProps>(`${this.apiUrl}/${id}`, teacher)
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocorreu um erro:', error.message);
    return throwError(() => new Error('Algo deu errado. Por favor, tente novamente.'));
  }
}
