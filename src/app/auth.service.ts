import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:3331/api/auth'; // URL vers API d'authentification

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.authUrl + '/signin', { username, password });
  }

  // Ajoutez d'autres méthodes au besoin, comme logout ou checkSession.
}
