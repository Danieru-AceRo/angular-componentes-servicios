import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = []
  total = 0;
  today = new Date();
  date = new Date(2021, 1, 21)

  products: Product[]  = [] 

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ) { 
    this.myShoppingCart = this.storeService.getShoping()
  }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data
      
    })
  }

  onAddToshoppingCart(product: Product) {
    console.log(product);
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal();
  }

}
