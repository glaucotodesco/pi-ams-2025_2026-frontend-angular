import { Injectable } from '@angular/core';
import { PeriodicityProps } from '../../interfaces/PeriodicityProps';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeriodicityService {
   private apiUrl = 'http://localhost:8080/periodicities';

  constructor(private http: HttpClient) {}

  getAll(): Observable<PeriodicityProps[]> {
    return this.http.get<PeriodicityProps[]>(this.apiUrl);
  }

  getById(periodicity: PeriodicityProps): Observable<PeriodicityProps> {
    return this.http.get<PeriodicityProps>(`${this.apiUrl}/${periodicity.id}`);
  }

  create(periodicity: PeriodicityProps): Observable<PeriodicityProps> {
    return this.http.post<PeriodicityProps>(this.apiUrl, periodicity);
  }

  update(periodicity: PeriodicityProps): Observable<PeriodicityProps> {
    return this.http.put<PeriodicityProps>(`${this.apiUrl}/${periodicity.id}`, periodicity);
  }
  delete(periodicity: PeriodicityProps): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${periodicity.id}`);
  }
}
