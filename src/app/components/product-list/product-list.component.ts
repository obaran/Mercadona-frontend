import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {

  isPromotionEnabled: boolean = false;
  
  topFunction() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  toggleDiscountField() {
    // Cette méthode peut être utilisée pour faire d'autres actions en plus de changer l'état
    // Par exemple, réinitialiser le pourcentage de promotion à 0 si la promotion n'est pas activée
    if (!this.isPromotionEnabled) {
      // Réinitialisez ici le pourcentage de promotion si nécessaire
    }
  }
}
