import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router} from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = this.CartService.getCart();
  total = this.CartService.getTotal();
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private CartService: CartService,
    private router: Router,
    private ProductService:ProductService

    // private toast: ToastrService
     ) {}

  ngOnInit(): void {
    console.log(`total ${this.total}`);
    console.log(`${this.cart}`);

  }

  remove(key: number) {
    debugger
    this.cart.forEach((value, index) => {
      if (value.product_Id == key) {
        this.cart.splice(index, 1);
        this.total -= value.price * value.qty;
        // this.toast.success(`Item ${value.title} Removed`);
        // this.ProductService.removeProduct(value.product_Id);
      }
    });
  }

  updateQty(id, qty) {
    this.cart.forEach((item) => {
      if (item.product_Id == id) {
        item.qty += qty;
        if (qty == 1) {
          this.total += item.price;
        } else {
          this.total -= item.price;
        }
      }
    });
  }

  onCart()
  {
    this.router.navigate (['/cart'])
  }

  Checkout()
  {
    this.router.navigate (['/orders'])
  }

}
