import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ProductDataService } from '../providers/product-data.service';
import { Product } from "../interfaces/product";
import { Observable } from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";
  public products: Observable<Product[]>;


  constructor(private http: Http, private productDataService: ProductDataService) { }

  ngOnInit(): void {

    this.productDataService.listProducts().subscribe(result => {
      this.products = result;
    });
  };

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }

  goToDesign(item: any) {
    console.log(item);
  };

  goToView(item: any) {
    console.log(item);
  };

  goToEdit(item: any) {
    console.log(item);
  };

}
