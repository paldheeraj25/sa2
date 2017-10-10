import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'design-component',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']

})
export class DesignComponent implements OnInit {

  ngOnInit() {
    
  }
  availableWidgets: Array<Widget> = [];
  selectedWidgets: Array<Widget> = [];

  constructor() {
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
    this.selectedWidgets.splice(index, 1);
}

}
class Widget {
  constructor(public name: string, public description: string, public index: number) {}
}
