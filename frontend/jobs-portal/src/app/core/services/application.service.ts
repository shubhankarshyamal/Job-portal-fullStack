import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../models/application.model';
import { API } from '../constants/app.constants';
import { environment } from '../../../assets/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private baseUrl = environment.API_END_POINT+API.APPLICATION; 

  constructor(private http: HttpClient) {}

  apply(jobId: number, application: Application): Observable<Application> {
    return this.http.post<Application>(`${this.baseUrl}/${jobId}`, application);
  }

}
