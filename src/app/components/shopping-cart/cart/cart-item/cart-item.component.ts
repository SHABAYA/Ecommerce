import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
   
  @Input() cartItem: any
  constructor() {
    this.cartItem = {
      name: 'Shoe',
      qty: 2,
      id: 1,
      price: 230,
      imagePath: ""
    }
  }

  ngOnInit(): void {
  }



}


