import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
import { CartItemComponent } from '../cart/cart-item/cart-item.component';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.css']
})
export class DescriptionPageComponent implements OnInit {
  public cartItems = new Array<any>();
  cartTotal = 0
  productItem!: Product;

  constructor(
    private datastore: DataService,
    public dialogRef: MatDialogRef<DescriptionPageComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: Product,

  ) {

  }

  ngOnInit(): void {
this.productItem = this.dialogData;
  }


  qty: number = 1;
  i = 1;

  plus() {
    if (this.i != 10) {
      this.i++;
      this.qty = this.i;
    }
  }


  minus() {
    if (this.i != 1) {
      this.i--;
      this.qty = this.i;
    }


  }

  handleAddToCart() {
    console.log()
    this.datastore.setData({ product: this.productItem, quantity: this.qty });
    this.dialogRef.close();
  }

}
