import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service'; 
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProductService } from './services/product.service';
import { LoginModalComponent } from './login-modal/login-modal.component';

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
  // @ViewChild('loginModalTemplate') loginModalTemplate!: TemplateRef<LoginModalComponent>;


  constructor(private router: Router, private authService: AuthService,
    private modalService: BsModalService,
    private productService: ProductService
    ) {}
    
    ngOnInit(){
      const products=this.productService.getProducts();
      console.log(products)
    }

  openLoginModal() {
  this.bsModalRef = this.modalService.show(LoginModalComponent); 
  }


  topFunction() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  title = 'mercadona';
}
