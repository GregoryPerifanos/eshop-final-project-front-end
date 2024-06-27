import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../../cart.service';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit {
@Input() product: Product;

constructor(private cartService: CartService) {}

addToCart(){
  const item = {...this.product, quantity: 1};
  this.cartService.addItem(item);
}

ngOnInit(): void {
    
}
}
