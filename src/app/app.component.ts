import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service'; 
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // Variables pour stocker les identifiants de l'utilisateur
  username: string = '';
  password: string = '';
  bsModalRef!: BsModalRef;
  @ViewChild('loginModalTemplate') loginModalTemplate!: TemplateRef<any>;


  constructor(private router: Router, private authService: AuthService,
    private modalService: BsModalService,
    private productService: ProductService
    ) {}
    
    ngOnInit(){
      const products=this.productService.getProducts();
      console.log(products)
    }

  openLoginModal() {
  this.bsModalRef = this.modalService.show(this.loginModalTemplate); 
  }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: (result) => {
        if (result) {
          // Cacher la modal après la connexion réussie
      this.bsModalRef.hide();
      this.router.navigate(['/product-list'])
        } else {
          // Afficher un message d'erreur
          alert('Nom d’utilisateur ou mot de passe incorrect.');
        }
      },
      error: (error) => {
        // Gérer l'erreur de connexion ici
       console.log(error);
      }
    });
  }

  topFunction() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  title = 'mercadona';
}
