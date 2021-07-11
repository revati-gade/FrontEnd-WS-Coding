import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import {ProductService} from '../services/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let productService:ProductService;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [ NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    productService = new ProductService(null);
    component=new DetailsComponent(productService);
     });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
