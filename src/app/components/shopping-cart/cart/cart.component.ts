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
    console.log('updateCart ',data)
    //check if item exit in the cart
    let product = data['product'];
    let quantity = data['quantity'];
    let item = this.cartItems.find(pr => {
      return pr['id'] === product['id']
    })
    console.log('item : ', item)
    if (undefined == item) {
      this.cartItems.push({
        id: product['id'],
        name: product['name'],
        qty: quantity,
        price: product['price']
      })
    } else {
      let itemIndex = this.cartItems.indexOf(item);
      let qty = item['qty'];
      qty=qty + quantity;
      let price = item['price'] * quantity;
      item['price'] = price;
      item['qty'] = qty;
      this.cartItems[itemIndex] = item
    }

    this.cartTotal = this.cartItems.reduce(function(a, prod) {
      return a + prod['price']
    },0)
  }

}
