import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {APIResponse, Product,DisplayProduct,Image} from '../models/dtos';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'WILLIAMS SONOMA';
  isOpen = false;

  products: DisplayProduct[] = [];
  images: Image[] = [];
  apiResponse: APIResponse;
  errorMessage: string;

  constructor(private router: Router,
              private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => {
        this.apiResponse = data;
        this.products = this.apiResponse.groups.map(p=>this.productService.validateProduct(p));
      }, error => {
        this.errorMessage = error;
      });
  }

  viewDetails(product: Product): void {
    // set it to service
    this.productService.setCurrentProduct(product);
    this.images= product.images;
    this.isOpen=!this.isOpen;
    document.getElementById("overlay").style.display = "block";
    // this.router.navigate(['/details']);
  }

  getDetails(): void {
    this.router.navigate(['/details']);
  }

  closeDetails(): void {
    document.getElementById("overlay").style.display = "none";
  }

}
