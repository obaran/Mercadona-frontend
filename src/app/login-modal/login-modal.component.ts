import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface LoginResponse {
  token: string;
}

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
  constructor(private http: HttpClient,
     public bsModalRef: BsModalRef,
     private router: Router,
     private toastr: ToastrService 
    ) {}

  // Méthode pour gérer la connexion de l'utilisateur
  onLogin() {
    this.http.post<LoginResponse>('http://localhost:3331/api/auth', { username: this.username, password: this.password })
      .subscribe({
        next: (response) => {
          console.log('Connexion réussie', response);
          localStorage.setItem('access_token', response.token);
          this.bsModalRef.hide();
          this.router.navigate(['/product-list']); // Redirection
        },
        error: (error) => {
          this.toastr.error('Erreur de connexion ! Veuillez vérifier vos identifiants.'); // Affiche un toast d'erreur
        }
      });
    }
}
