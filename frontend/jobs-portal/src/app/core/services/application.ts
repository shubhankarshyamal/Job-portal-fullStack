import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private baseUrl = 'http://localhost:8080/api/applications';

  constructor(private http: HttpClient) {}

  apply(jobId: number, application: Application): Observable<Application> {
    return this.http.post<Application>(`${this.baseUrl}/${jobId}`, application);
  }
}
