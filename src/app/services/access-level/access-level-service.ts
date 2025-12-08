import { Injectable } from '@angular/core';
import { AccessLevelProps } from '../../interfaces/AccessLevelProps';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccessLevelService {
  private apiUrl = 'http://localhost:8080/access-levels';

  constructor(private http: HttpClient) {}

  getAll(): Observable<AccessLevelProps[]> {
    return this.http.get<AccessLevelProps[]>(this.apiUrl);
  }

  getById(accessLevel: AccessLevelProps): Observable<AccessLevelProps> {
    return this.http.get<AccessLevelProps>(`${this.apiUrl}/${accessLevel.id}`);
  }

  create(accessLevel: AccessLevelProps): Observable<AccessLevelProps> {
    return this.http.post<AccessLevelProps>(this.apiUrl, accessLevel);
  }

  update(accessLevel: AccessLevelProps): Observable<AccessLevelProps> {
    return this.http.put<AccessLevelProps>(`${this.apiUrl}/${accessLevel.id}`, accessLevel);
  }

  delete(accessLevel: AccessLevelProps): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${accessLevel.id}`);
  }
}
