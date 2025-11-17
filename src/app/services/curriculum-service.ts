import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import type { Curriculum } from '../modules/coordinator/pages/curriculum/curriculums';

@Injectable({ providedIn: 'root' })
export class CurriculumService {
  private apiUrl = 'http://localhost:8080/curriculums';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Curriculum[]> {
    return this.http.get<Curriculum[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Curriculum> {
    return this.http.get<Curriculum>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  create(curriculum: Curriculum): Observable<Curriculum> {
    return this.http.post<Curriculum>(this.apiUrl, curriculum).pipe(catchError(this.handleError));
  }

  update(id: number, curriculum: Curriculum): Observable<Curriculum> {
    return this.http.put<Curriculum>(`${this.apiUrl}/${id}`, curriculum).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro na API de curriculums:', error.message);
    return throwError(() => new Error('Falha ao comunicar com o servidor. Tente novamente.'));
  }
}
