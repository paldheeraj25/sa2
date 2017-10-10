import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUtil } from './file.util';
import { ProductDataService } from "../providers/product-data.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @ViewChild('fileImportInput')

  fileImportInput: any;
  private idList: Array<string>;

  csvRecords = [];
  constructor(private _fileUtil: FileUtil, private productDataService: ProductDataService) { }

  ngOnInit() {
  }

  productUpload(product: any) {
    let productListDetail: { metadata: any, idList: any };
    productListDetail = { metadata: product, idList: this.idList };
    console.log(productListDetail);
    this.productDataService.uploadProduct(productListDetail).subscribe(result => {
      return result;
    }, error => {
      return error;
    });
  }

  // METHOD CALLED WHEN CSV FILE IS IMPORTED
  fileChangeListener($event): void {
    var files = $event.srcElement.files;

    if (this._fileUtil.isCSVFile(files[0])) {
      var input = $event.target;
      var reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = (data) => {
        let csvData = reader.result;
        let csvRecordsArray = csvData.split(/\r\n|\n/);
        let headersRow = this._fileUtil.getHeaderArray(csvRecordsArray);
        this.csvRecords = this._fileUtil.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        this.idList = this.csvRecords;
      }

      reader.onerror = function () {
        alert('Unable to read ' + input.files[0]);
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  };

  fileReset() {
    this.fileImportInput.nativeElement.value = "";
    this.csvRecords = [];
  }
}
