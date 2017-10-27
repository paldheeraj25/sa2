import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { has, keys, pick } from 'lodash';
import { FadeInTop } from "../shared/animations/fade-in-top.decorator";
import { Product } from "../+product/interfaces/product";
import { ProductDataService } from "../+product/providers/product-data.service";

@FadeInTop()
@Component({
  selector: 'design-component',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']

})
export class DesignComponent implements OnInit {

  private product: Product;
  availableWidgets: Array<Widget> = [];
  selectedWidgets: Array<Widget> = [];

  private routeState = { design: 'Design', edit: 'Edit' };
  private widgetCollection = [
    { name: "heading", container: "heading container", id: 0 },
    { name: "image", container: "Image container", id: 1 },
    { name: "description", container: "Description container", id: 2 },
    { name: "border", container: "Bottom border", id: 3},
    { name: "item", container: "Item name", id: 4},
    { name: "GWInGms", container: "GW in grams", id: 5},
    { name: "NetWeight", container: "Net Weight", id: 6},
    { name: "GoldRate", container: "Gold Rate", id: 7},
    { name: "SettingsCharge", container: "Settings Charges", id: 8}
  ];

  designPayload = {};
  showImage = false;

  ngOnInit() {
    if (this.route.snapshot.data['pageTitle'] === this.routeState.design) {
      for (let widget of this.widgetCollection) {
        this.availableWidgets.push(new Widget(widget.name, widget.container, widget.id));
      }
    } else {
      for (let widget of this.widgetCollection) {
        if (has(this.productDataService.selectedProduct, widget.name) && this.productDataService.selectedProduct[widget.name].show) {
          this.selectedWidgets.push(new Widget(widget.name, widget.container, widget.id));
        } else {
          this.availableWidgets.push(new Widget(widget.name, widget.container, widget.id));
        }
      }
    }
  }

  constructor(private route: ActivatedRoute, private productDataService: ProductDataService) {
  }

  pushWidget($event: any, index: number) {
    let newWidget: Widget = $event.dragData;
    this.selectedWidgets.push(new Widget(newWidget.name, newWidget.description, newWidget.index));
    this.selectedWidgets.sort((a: Widget, b: Widget) => {
      return a.index - b.index;
    });
    this.availableWidgets.splice(index, 1);
  }

  pullWidget(index: number) {
    let newWidget: Widget = this.selectedWidgets[index];
    this.availableWidgets.push(new Widget(newWidget.name, newWidget.description, newWidget.index));
    this.availableWidgets.sort((a: Widget, b: Widget) => {
      return a.index - b.index;
    });
    if (newWidget.name === 'image') {
      this.showImage = false;
    }
    this.selectedWidgets.splice(index, 1);
    this.designPayload[newWidget.name] = '';
    this.designPayload['imageUrl'] = '';
  }

  uploadImage(file) {
    this.showImage = true;
    var output = document.getElementById('output');
    if (file) {
      var input = file.target;
      let reader = new FileReader();
      reader.onload = function () {
        let uploadedImage = reader.result;
        //Below lines gives you idea about image show
        output.setAttribute('src', uploadedImage);
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      output.setAttribute('src', this.designPayload['imageUrl']);
    }
  };

  submitDesign() {
    // for (let widget of this.selectedWidgets) {
    //   console.log(widget.name)
    //   console.log(has(this.productDataService.selectedProduct, widget.name));
    //   this.productDataService.selectedProduct[widget.name].show = has(this.selectedWidgets.selectedProduct, widget.name) ? true : false;
    //   // if(has(this.productDataService.selectedProduct, widget.name)){
    //   //   this.productDataService.selectedProduct[widget.name].show = true;
    //   // } else{
    //   //   this.productDataService.selectedProduct[widget.name].show = false;
    //   // }
    // }
    // for (let widget of this.productDataService.selectedProduct) {
    //     this.availableWidgets.push(new Widget(widget.name, widget.container, widget.id));
    //   }
    console.log(this.productDataService.selectedProduct);
  }
}
class Widget {
  constructor(public name: string, public description: string, public index: number) { }
}

class DesignModel {
  constructor(public heading: string, public image: string, public description: string) { }
}
