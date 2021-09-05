import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.css']
})
export class DescriptionPageComponent implements OnInit {

  constructor(
    private datastore: DataService,
    public dialogRef:MatDialogRef<DescriptionPageComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: Product,

  ) { }

  ngOnInit(): void {
  }

  // handleAddToCart(data:any) {
  //   this.datastore.setData(data);
  // }

  

}
