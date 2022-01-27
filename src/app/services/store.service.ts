import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  private mycart = new BehaviorSubject<Product[]>([])
  
  mycart$ = this.mycart.asObservable()

  constructor() { }

  addProduct(product:Product){
    this.myShoppingCart.push(product);
    this.mycart.next(this.myShoppingCart)
  }

  getShoping() {
    return this.myShoppingCart
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)
  }
}
