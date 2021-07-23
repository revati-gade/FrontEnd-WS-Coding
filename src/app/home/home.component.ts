import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { APIResponse, Product, DisplayProduct, Image } from '../models/dtos';
// import { Router } from '@angular/router';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'WILLIAMS SONOMA';
  isOpen = false;

  products: DisplayProduct[] = [];
  images: Image[] = [];
  apiResponse: APIResponse;
  errorMessage: string;  
  name: string;
  imagesUrl: any;

  constructor(private modalService: NgbModal,
    private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => {
        this.apiResponse = data;
        this.products = this.apiResponse.groups.map(p => this.productService.validateProduct(p));
        this.images = this.products[0].images;
      }, error => {
        this.errorMessage = error;
      });
  }

  openModal(insideContent: string, group: DisplayProduct) {
    this.modalService.open(insideContent, {
      size: 'sm'
    });
    this.name = group.name;
    this.imagesUrl =  group.images.length != 0 ?group.images.map((image) => image.href):[group.hero.href];
  }

}
