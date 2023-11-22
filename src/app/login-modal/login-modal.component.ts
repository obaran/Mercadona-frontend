import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  // Propriétés pour stocker les entrées de l'utilisateur
  username: string = '';
  password: string = '';

  // Injection HttpClient pour faire des requêtes HTTP
  constructor(private http: HttpClient,
     public bsModalRef: BsModalRef,
     private router: Router,
     private toastr: ToastrService,
     private authService: AuthService
    ) {}

  // Méthode pour gérer la connexion de l'utilisateur
  onLogin() {
    // this.http.post<LoginResponse>('http://localhost:3331/auth', { username: this.username, password: this.password })
      this.authService.login(this.username, this.password)
    .subscribe({
        next: (response) => {
          console.log('Connexion réussie', response);
          localStorage.setItem('access_token', response.token); //,token
          this.bsModalRef.hide();
          this.router.navigate(['product-list']); // Redirection
        },
        error: (error) => {
          this.toastr.error('Erreur de connexion ! Veuillez vérifier vos identifiants.'); // Affichage un toast d'erreur
        }
      });
    }
}
