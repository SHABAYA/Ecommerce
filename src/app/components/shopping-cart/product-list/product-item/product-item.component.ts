import { Component, Input, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DescriptionPageComponent } from '../../description-page/description-page.component';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: Product;

  constructor(private datastore: DataService, public dialog: MatDialog) { }

  openDescription(){
    this.dialog.open(DescriptionPageComponent,{data:this.productItem});
  }


  ngOnInit(): void {
  }
  handleAddToCart() {
    this.datastore.setData(this.productItem);
  }
}

