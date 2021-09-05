import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DescriptionPageComponent } from '../../description-page/description-page.component';
describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ ProductItemComponent ],
      providers:[DataService,MatDialog,ProductItemComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#handleAddToCart() should add the current product to #cart',()=>{
    const comp:ProductItemComponent = TestBed.inject(ProductItemComponent);
    expect(comp.handleAddToCart()).toEqual(true);
  })
});
