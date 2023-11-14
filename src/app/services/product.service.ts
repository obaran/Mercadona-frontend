// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = `${environment.apiBaseUrl}/products`; // l'URL de base à partir des variables d'environnement

  constructor(private http: HttpClient) { }

 // Obtenir tous les produits
 getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl);
}

// Obtenir un produit par son ID
getProductById(id: number): Observable<Product> {
  return this.http.get<Product>(`${this.baseUrl}/${id}`);
}

// Ajouter un nouveau produit
addProduct(product: Product): Observable<Product> {
  return this.http.post<Product>(this.baseUrl, product);
}

// Mettre à jour un produit
updateProduct(id: number, product: Product): Observable<Product> {
  return this.http.put<Product>(`${this.baseUrl}/${id}`, product);
}

// Supprimer un produit
deleteProduct(id: number): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/${id}`);
}
}
