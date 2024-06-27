import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsItemComponent } from './products/products-list/products-item/products-item.component';
import { CartComponent } from './cart/cart.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'login', component: LoginPageComponent},
    // {path:'', component: HomeComponent},
    {path:'products', component: ProductsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'sign-up', component: SignUpComponent},
     {path: '**', redirectTo: 'sign-up'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    ProductsListComponent,
    ProductsItemComponent,
    CartComponent,
    LoginPageComponent,
    HomeComponent,
    SignUpComponent,
    AuthContentComponent,
    UserDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
