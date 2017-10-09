import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "./product.component";
import { ModuleWithProviders } from "@angular/core";

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
    data: {
      pageTitle: 'Product'
    }
  }
];

export const productRouting: ModuleWithProviders = RouterModule.forChild(productRoutes);

