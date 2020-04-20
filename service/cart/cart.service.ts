import { Injectable } from '@angular/core';
import { Product } from '../../interface/product'
import { CartItem } from 'interface/cart-item';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemObs:Observable<[]>
  items = [];
  quantity = {}

  addToCart(product: Product) {
    if (this.quantity[product.Id] > 0) {
      this.quantity[product.Id] += 1;
    } else {
      this.items.push(product);
      this.quantity[product.Id] = 1;
    }
  }
  getItems() {
    return this.items;
  }

  totalPrice(): number {
    let total = 0;
    this.items.forEach(item => total += item.price * this.quantity[item.Id])
    return total;
  }

  deleteFromCart(product: Product) {
    this.items.filter((item: Product) => {
      item.Id != product.Id
      console.log(item.Id)
      console.log(product.Id)
    })
  }


  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() { }
}