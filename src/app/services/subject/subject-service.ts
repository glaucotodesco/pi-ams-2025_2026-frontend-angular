import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubjectProps } from '../../interfaces/SubjectProps';
@Injectable({ providedIn: 'root' })

export class SubjectService {
  private apiUrl = 'http://localhost:8080/subjects';

  constructor(private http: HttpClient) {}

  getAll(): Observable<SubjectProps[]> {
    return this.http.get<SubjectProps[]>(this.apiUrl);
  }

  getById(subject: SubjectProps): Observable<SubjectProps> {
    return this.http.get<SubjectProps>(`${this.apiUrl}/${subject.id}`);
  }

  create(subject: SubjectProps): Observable<SubjectProps> {
    return this.http.post<SubjectProps>(this.apiUrl, subject);
  }

  update(subject: SubjectProps): Observable<SubjectProps> {
    return this.http.put<SubjectProps>(`${this.apiUrl}/${subject.id}`, subject);
  }

  delete(subject: SubjectProps): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${subject.id}`);
  }
}
