import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Job {

   private baseUrl = 'http://localhost:8080/api/jobs';

  constructor(private http: HttpClient) {}
  
  getJobById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  
}
