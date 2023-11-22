import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import {BrowserModule} from "@angular/platform-browser";


const routes: Routes = [
{ path:  'product-list', component: ProductListComponent, },

];
@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }


