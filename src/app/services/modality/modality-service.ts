import { Injectable } from '@angular/core';
import { ModalityProps } from '../../interfaces/ModalityProps';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalityService {
  private apiUrl = 'http://localhost:8080/modalities';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ModalityProps[]> {
    return this.http.get<ModalityProps[]>(this.apiUrl);
  }

  getById(modality: ModalityProps): Observable<ModalityProps> {
    return this.http.get<ModalityProps>(`${this.apiUrl}/${modality.id}`);
  }

  create(modality: ModalityProps): Observable<ModalityProps> {
    return this.http.post<ModalityProps>(this.apiUrl, modality);
  }

  update(modality: ModalityProps): Observable<ModalityProps> {
    return this.http.put<ModalityProps>(`${this.apiUrl}/${modality.id}`, modality);
  }
  delete(modality: ModalityProps): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${modality.id}`);
  }
}
