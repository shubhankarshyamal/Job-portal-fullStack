import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * API Constants
 */
import { API, API_END_POINT } from '../constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {

  private baseUrl : string = API_END_POINT + API.APPLICATION;

  constructor(
    private http: HttpClient
  ) {}

public submitApplication(payload: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/submit`, payload);
}

public getApplicationsByJobId(jobId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/job/${jobId}`);
}
  
}
