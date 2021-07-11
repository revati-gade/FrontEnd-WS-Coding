import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product,DisplayProduct} from '../models/dtos';

@Injectable()
export class ProductService {
  private currentProduct: Product;
  private validatedProduct: DisplayProduct;
  private _url = '../../assets/data/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    // return this.http.get('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json');
     return this.http.get(this._url);
  }

  validateProduct(product: Product) {
    console.log(product);
    this.validatedProduct = {
      name: product.name?product.name:'',
      price: product.price?product.price.regular:product.priceRange?product.priceRange.selling.low:0,
      hero: product.hero?product.hero:product.thumbnail,
     images: product.images
    } ;
    return this.validatedProduct
  }

  setCurrentProduct(product: Product) {
    this.currentProduct = product;
  }

  getCurrentProduct(): Product {
    return this.currentProduct;
  }
}

