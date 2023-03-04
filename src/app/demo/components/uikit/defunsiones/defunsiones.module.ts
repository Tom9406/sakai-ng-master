import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefunsionesRoutingModule } from './defunsiones-routing.module';
import { DefunsionesComponent } from './defunsiones.component';


@NgModule({
  declarations: [DefunsionesComponent],
  imports: [
    CommonModule,
    DefunsionesRoutingModule
  ]
})
export class DefunsionesModule { }
