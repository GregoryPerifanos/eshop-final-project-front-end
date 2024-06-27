import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { AxiosService } from '../axios.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService, private axiosService: AxiosService, private snackBar: MatSnackBar) {}

  get cartItems() {
    return this.cartService.getItems();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
  }

  placeOrder() {
    // Logic to place the order
    console.log('Order placed:', this.cartItems);
    let products = {
      "productsDTOList": this.cartService.getItems()
    }
    this.axiosService.request("POST", "/orders/create", products)
    .then(response => {
      this.snackBar.open(`Congratulations you have created an account proceed to Login!!`, 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
    });
    
  }
}
