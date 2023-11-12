import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    // Vérifiez si le token existe dans le localStorage
    const token = localStorage.getItem('access_token');
    // Retournez `true` si le token existe, ce qui indique qu'un utilisateur est connecté
    return !!token;
}
  private authUrl = 'http://localhost:3331/api/auth'; // URL vers API d'authentification

  constructor(private http: HttpClient, private router: Router) {} // Injectez le Router ici

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
    this.router.navigate(['/login']); // Ajoutez la redirection vers la page de connexion
  }
  
}
