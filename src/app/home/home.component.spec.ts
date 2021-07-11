import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let productService:ProductService;
  let router: Router;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    productService = new ProductService(null);
    component= new HomeComponent(router,productService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
