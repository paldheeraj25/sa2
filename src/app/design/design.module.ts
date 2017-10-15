import {NgModule} from '@angular/core';
import {DesignComponent} from './design.component';
import { designRouting } from "./design.routing";
import {SmartadminModule} from '../shared/smartadmin.module';
import {DndModule} from 'ng2-dnd';

@NgModule({
  imports: [
    SmartadminModule,
    designRouting,
    DndModule.forRoot()
  ],
  declarations: [DesignComponent],
  providers: [],
})
export class DesignModule {

}