import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrl: './products-item.component.css'
})
export class ProductsItemComponent implements OnInit{
ngOnInit() {
    
}

@Input() product: Product;
@Output() productSelected = new EventEmitter<void>();

onSelected() {
  this.productSelected.emit();
}

}
