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
export class Job {

   private baseUrl = API_END_POINT+ API.JOBS;

  constructor(private http: HttpClient) {}
  
  getJobById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  
}
