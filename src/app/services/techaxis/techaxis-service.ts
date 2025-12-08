import { Injectable } from '@angular/core';
import { TechAxisProps } from '../../interfaces/TechAxisProps';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TechaxisService {
   private apiUrl = 'http://localhost:8080/tech-axis';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TechAxisProps[]> {
    return this.http.get<TechAxisProps[]>(this.apiUrl);
  }

  getById(techAxi: TechAxisProps): Observable<TechAxisProps> {
    return this.http.get<TechAxisProps>(`${this.apiUrl}/${techAxi.id}`);
  }

  create(techAxi: TechAxisProps): Observable<TechAxisProps> {
    return this.http.post<TechAxisProps>(this.apiUrl, techAxi);
  }

  update(techAxis: TechAxisProps): Observable<TechAxisProps> {
    return this.http.put<TechAxisProps>(`${this.apiUrl}/${techAxis.id}`, techAxis);
  }

  delete(techAxis: TechAxisProps): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${techAxis.id}`);
  }
}
