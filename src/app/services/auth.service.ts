import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  private authUrl = 'http://localhost:3331/api/auth'; // URL vers API d'authentification

  login(username: string, password: string) {
    return this.http.post<any>(`${this.authUrl}/signin`, { username, password })
      .pipe(map((response: any) => {
        // Stocker le token JWT retourné dans le local storage ou un autre emplacement sûr
        localStorage.setItem('currentUser', JSON.stringify(response));
        return response;
      }));
  }
  
  logout() {
    // Retirer l'utilisateur du local storage pour se déconnecter
    localStorage.removeItem('currentUser');
  }
  
}
