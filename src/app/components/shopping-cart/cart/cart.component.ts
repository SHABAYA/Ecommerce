import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItems = new Array<any>();
  cartTotal = 0
  constructor(private datastore: DataService) { }

  ngOnInit(): void {

    this.cartTotal = this.cartItems.length
    this.datastore.getData().pipe().subscribe(
      {
        next: (data: any) => {
          this.updateCart(data);
        }
      }
    )
  }

  clearCart(){
    this.cartItems =[];
  }
  public updateCart(data: any) {
    //check if item exit in the cart
    let item = this.cartItems.find(pr => {
      return pr['id'] === data['id']
    })
    console.log('item : ', item)
    if (undefined == item) {
      this.cartItems.push({
        id: data['id'],
        name: data['name'],
        qty: 1,
        price: data['price']
      })
    } else {
      let itemIndex = this.cartItems.indexOf(item);
      let qty = item['qty'];
      qty += 1
      let price = item['price'] + data['price']
      item['price'] = price;
      item['qty'] = qty;
      this.cartItems[itemIndex] = item
    }

    this.cartTotal = this.cartItems.reduce(function(a, prod) {
      return a + prod['price']
    },0)
  }

}
