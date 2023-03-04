import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatrimoniosRoutingModule } from './matrimonios-routing.module';
import { MatrimoniosComponent } from './matrimonios.component';


@NgModule({
  declarations: [
    MatrimoniosComponent
  ],
  imports: [
    CommonModule,
    MatrimoniosRoutingModule
  ]
})
export class MatrimoniosModule { }
