import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurriculumProps } from '../interfaces/CurriculumProps';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private apiUrl = 'http://localhost:8080/curriculums';

  constructor(private http: HttpClient) { }

  getAll(): Observable<CurriculumProps[]> {
    return this.http.get<CurriculumProps[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<CurriculumProps> {
    return this.http.get<CurriculumProps>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  create(curriculum: CurriculumProps): Observable<CurriculumProps> {
    return this.http.post<CurriculumProps>(this.apiUrl, curriculum)
      .pipe(catchError(this.handleError));
  }

  update(id: number, curriculum: CurriculumProps): Observable<CurriculumProps> {
    return this.http.put<CurriculumProps>(`${this.apiUrl}/${id}`, curriculum)
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
