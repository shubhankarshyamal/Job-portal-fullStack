import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../assets/environments/environment';
import { API } from '../constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  
  private baseUrl : string = environment.API_END_POINT + API.LOGIN;

    constructor(
      private http: HttpClient
    ) {}

  public login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password })
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token);
          if (res.roles) {
            localStorage.setItem('roles', JSON.stringify(res.roles));
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  
}
