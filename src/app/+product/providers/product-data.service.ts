import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class ProductDataService {
  private productUploadUrl = "http://localhost:5012/api/upload";

  constructor(private http: Http) { }

  uploadProduct(productList: any) {
    return this.http.post(this.productUploadUrl, productList).map(res => res.json()).take(1);
  }

}
