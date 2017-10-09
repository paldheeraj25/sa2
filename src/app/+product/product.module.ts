import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ProductComponent } from './product.component';
import { productRouting } from "./product.routing";
import { SmartadminModule } from "../shared/smartadmin.module";
import { ProductFormComponent } from './product-form/product-form.component';
import { UiDatepickerDirective } from "../shared/forms/input/ui-datepicker.directive";

@NgModule({
  imports: [
    CommonModule,
    productRouting,
    SmartadminModule,
    FormsModule
  ],
  declarations: [ProductComponent, ProductFormComponent, UiDatepickerDirective]
})
export class ProductModule { }
