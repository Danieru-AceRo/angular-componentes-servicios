import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: 'string',
    category: '',
    image: 'string',
    rating: {
      rate: 0,
      count:0,
    },
  }

  @Output() addedProduct = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddCart() {
    this.addedProduct.emit(this.product)
    
  }

}
