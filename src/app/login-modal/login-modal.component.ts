import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  // Propriétés pour stocker les entrées de l'utilisateur
  username: string = '';
  password: string = '';

  // Injecter HttpClient pour faire des requêtes HTTP
  constructor(private http: HttpClient) {}

  // Méthode pour gérer la connexion de l'utilisateur
  onLogin() {
    // La logique qui devrait être exécutée lorsque l'utilisateur essaie de se connecter
    console.log('Tentative de connexion avec', this.username, this.password);

    // Remplacez 'your-api-url' par l'URL de votre point de terminaison d'authentification
    this.http.post('your-api-url', { username: this.username, password: this.password })
      .subscribe({
        next: (response) => {
          // Vous devez adapter la logique de gestion des réponses en fonction de la structure de votre réponse API
          console.log('Connexion réussie', response);
          // Gérer la réponse de connexion réussie, comme enregistrer le jeton, rediriger l'utilisateur, etc.
        },
        error: (error) => {
          console.error('Erreur de connexion', error);
          // Gérer l'erreur de connexion, comme afficher un message à l'utilisateur
        }
      });
    }

  // Les autres méthodes et propriétés de votre composant iront ici
}
