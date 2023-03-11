import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscribirRoutingModule } from './inscribir-routing.module';
import { InscribirComponent } from './inscribir.component';


@NgModule({
  declarations: [InscribirComponent],
  imports: [
    CommonModule,
    InscribirRoutingModule
  ]
})
export class InscribirModule { }
