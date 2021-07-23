import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {ProductService} from '../services/product.service';
import { NgbModule,NgbCarousel,NgbCarouselConfig,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient,HttpHandler} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, DebugElement} from '@angular/core';
import { products } from '../../assets/mockData'

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const DECLARATIONS = [
    HomeComponent
  ];
  const IMPORTS = [    
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule
  ];
  const CONFIGURATION = {
    declarations: DECLARATIONS,
    imports: IMPORTS,
    providers: [ProductService,HttpClient,HttpHandler,NgbCarousel,NgbCarouselConfig,NgbModal],
    schemas: [NO_ERRORS_SCHEMA]
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule(CONFIGURATION)
    .compileComponents();
  }));

 
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
   
  });

  describe('Template Cases', () => {
    let html: DebugElement;
    beforeEach(() => {
      html = fixture.debugElement;
    });
    it('should render products component template', () => {
      expect(component).toBeTruthy();
    });
    it('should render title on dashboard', () => {
      component.products=[products]
      component.images=products.images
      fixture.detectChanges();
      const title = html.queryAll(By.css('h1'));
      expect(title).toBeTruthy('WILLIAMS SONOMA');
    });


    it('should render tiles on dashboard', () => {
      component.products=[products]
      component.images=products.images
      fixture.detectChanges();
      const tile = html.queryAll(By.css('ProductCard-container'));
      const img = html.query(By.css('img'));      
      const overflowImage = html.query(By.css('img'));
      const overflowOption = html.nativeElement.querySelector('.img-responsive');
      expect(img).toBeTruthy();
      expect(tile.length).toEqual(0);
      overflowOption.click();
      fixture.detectChanges();
      expect(overflowImage).toBeTruthy();
    });
  });
});
