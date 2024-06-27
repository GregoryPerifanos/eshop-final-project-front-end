import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';
import { AxiosService } from '../../axios.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  @Output() productWasSelected = new EventEmitter<Product>();

  products: Product[] = [
    
  ];

  

  constructor(private axiosService: AxiosService){}

  ngOnInit() {
    console.log(this.axiosService.getAuthToken())
    this.axiosService.request("GET", '/products/get_all').then(response => {
      console.log(response.data)
      this.products = response.data;
    })
  }

  onProductSelected(product: Product) {
    this.productWasSelected.emit(product);
  }

}
