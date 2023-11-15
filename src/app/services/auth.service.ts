import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'; 

export class LoginResponse {
  token!: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Utilisation environment.apiBaseUrl pour définir l'URL de base
  private authUrl = `${environment.apiBaseUrl}/auth`;

  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }

  login(username: string, password: string) {
    return this.http.post<LoginResponse>(`${this.authUrl}/login`, { username, password })
      .pipe(map((response: LoginResponse) => {
       localStorage.setItem('currentUser', JSON.stringify(response));
        return response;
      }));
  }
  
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
