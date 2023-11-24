import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductListComponent } from './components/product-list/product-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { FormsModule } from '@angular/forms';
// Importez les modules ngx-bootstrap nécessaires
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
     LoginModalComponent,
     HomeComponent,
     ProductListComponent
  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    RoutingModule,
    FormsModule,
    // les modules ngx-bootstrap
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
