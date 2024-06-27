import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserDetailsComponent } from "./user-details/user-details.component";



const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path:'', component: HomeComponent },
    { path:'products', component: ProductsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'user-details', component: UserDetailsComponent },
    { path: '**', redirectTo: 'sign-up' }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }