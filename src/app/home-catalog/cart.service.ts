import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  item = [];
  total = 0;
  constructor() {}
  // tslint:disable-next-line: typedef
  addToCart(product) {
    let cartItem;
    if (this.item.length === 0) {
      cartItem = {
        product_Id: product.product_Id,
        product_Title: product.product_Title,
        price: product.price,
        image: product.image,
        qty: 1,
      };
      this.total += product.price;
      this.item.push(cartItem);
      console.log(`first product Addes ${cartItem}`);

    } else {
      let entry = 0;
      this.item.forEach((element) => {
        if (element.product_Id === product.product_Id) {
          element.qty += 1;
          this.total += product.price;
          entry = 1;
        }
      });
      if (entry === 0) {
        cartItem = {
          product_Id: product.product_Id,
          product_Title: product.product_Title,
          price: product.price,
          image: product.image,
          qty: 1,
        };
        this.item.push(cartItem);
        this.total += product.price;
      }
      this.item.forEach((element) => console.log(element));
    }
  }

  // tslint:disable-next-line: typedef
  getCart() {
    return this.item;
  }

  // tslint:disable-next-line: typedef
  getTotal() {
    return this.total;
  }
}
