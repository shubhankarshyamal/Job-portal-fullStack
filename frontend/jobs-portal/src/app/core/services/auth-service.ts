import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  baseUrl : string = 'http://localhost:8080/api/auth';

    constructor(
      private http: HttpClient
    ) {}

  // Login method
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

  // Logout method
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
  }

  // Get JWT token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Check if logged in
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Check if user has admin role
  isAdmin(): boolean {
    const roles = localStorage.getItem('roles');
    if (!roles) return false;
    return JSON.parse(roles).includes('ADMIN');
  }
  
}
