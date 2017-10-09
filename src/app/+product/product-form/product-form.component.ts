import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  productUpload(product: any) {
    console.log(product);
  }

  convertFile() {
    const input = document.getElementById('fileInput');

    const reader = new FileReader();
    reader.onload = () => {
      let text = reader.result;
      console.log('CSV: ', text.substring(0, 100) + '...');

      //convert text to json here
      //var json = this.csvJSON(text);
    };
    //reader.readAsText(input.files[0]);
  };
}
