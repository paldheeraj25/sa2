
import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {NestableListsComponent} from "./nestable-lists.component";

export const nestableListsRoutes: Routes = [
  {
  path: '', redirectTo: 'design', pathMatch: 'full'
  },
  {
    path: 'design',
    loadChildren: './'
  }
];

export const nestableListsRouting = RouterModule.forChild(nestableListsRoutes);




// import { ModuleWithProviders } from "@angular/core"
// import { Routes, RouterModule } from '@angular/router';
// import { AnalyticsModule } from "./+analytics/analytics.module";

// export const routes: Routes = [
//   {
//     path: '', redirectTo: 'analytics', pathMatch: 'full'
//   },
//   {
//     path: 'analytics',
//     loadChildren: './+analytics/analytics.module#AnalyticsModule',

//   },
//   {
//     path: 'social',
//     loadChildren: './+social/social.module#SocialModule',
//   }
// ];

// export const routing = RouterModule.forChild(routes);
