import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Product } from "../interfaces/product";


@Injectable()
export class ProductDataService {
  private productUploadUrl = "http://localhost:5012/api/upload";
  private productListUrl = "http://localhost:5012/api/products";
  public selectedProduct: Product;
  constructor(private http: Http) { }

  uploadProduct(productList: any) {
    console.log(productList);
    return this.http.post(this.productUploadUrl, productList).map(res => res.json()).take(1);
  }
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'bearer ' + localStorage.getItem('key'));
  }

  listProducts() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.productListUrl, {
      headers: headers
    }).map(res => res.json());
  }

}
