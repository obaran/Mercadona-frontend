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

  constructor(private productService: ProductService) {
   }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

    toggleDiscountFields() {
      this.isPromotionEnabled = !this.isPromotionEnabled;
    }
  }

