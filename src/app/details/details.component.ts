import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Image} from '../models/dtos';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  images: Image[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.images = this.productService.getCurrentProduct().images;
  }

}
