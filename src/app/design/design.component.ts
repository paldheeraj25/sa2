import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FadeInTop} from "../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'design-component',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']

})
export class DesignComponent implements OnInit {

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
    });
  }
  availableWidgets: Array<Widget> = [];
  selectedWidgets: Array<Widget> = [];

  designPayload = {};
  showImage = false;

  constructor(private route: ActivatedRoute) {
      this.availableWidgets.push(new Widget('header', "Header container", 0));
      this.availableWidgets.push(new Widget('image', "Image container", 1));
      this.availableWidgets.push(new Widget('description', "Description container", 2));
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
    if(newWidget.name === 'image'){
      this.showImage = false;
    }
    this.selectedWidgets.splice(index, 1);
    this.designPayload[newWidget.name] = '';
    this.designPayload['imageUrl'] = '';
  }

  uploadImage(file) {
    this.showImage = true;
    var output = document.getElementById('output');
    if(file){
      var input = file.target;
      let reader = new FileReader();
      reader.onload = function(){
        let uploadedImage = reader.result;
        //Below lines gives you idea about image show
        output.setAttribute('src', uploadedImage);
      };
      reader.readAsDataURL(input.files[0]);
    }else {
      output.setAttribute('src', this.designPayload['imageUrl']);
    }
  };

}
class Widget {
  constructor(public name: string, public description: string, public index: number) {}
}

class DesignModel {
  constructor(public header:string, public image:string, public description:string) {}
}
