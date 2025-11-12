import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClassroomProps } from '../interfaces/ClassroomProps';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private apiUrl = 'http://localhost:8080/classrooms';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ClassroomProps[]> {
    return this.http.get<ClassroomProps[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<ClassroomProps> {
    return this.http.get<ClassroomProps>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  create(classroomProps: ClassroomProps): Observable<ClassroomProps> {
    return this.http.post<ClassroomProps>(this.apiUrl, classroomProps)
      .pipe(catchError(this.handleError));
  }

  update(id: number, classroomProps: ClassroomProps): Observable<ClassroomProps> {
    return this.http.put<ClassroomProps>(`${this.apiUrl}/${id}`, classroomProps)
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
