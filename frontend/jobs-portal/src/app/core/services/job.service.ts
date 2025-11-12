import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPosting } from '../models/job.model';
import { environment } from '../../../assets/environments/environment';
import { API } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseUrl = environment.API_END_POINT + API.JOBS;

  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<JobPosting[]> {
    return this.http.get<JobPosting[]>(`${this.baseUrl}/all`);
  }

  getJobById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createJob(job: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, job);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
