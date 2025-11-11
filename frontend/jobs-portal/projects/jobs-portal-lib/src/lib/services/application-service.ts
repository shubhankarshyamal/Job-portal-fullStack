import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {

  baseUrl : string = 'http://localhost:8080/api/applications';

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
