import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatrimoniosRoutingModule } from './matrimonios-routing.module';
import { MatrimoniosComponent } from './matrimonios.component';
import { ButtonModule } from 'primeng/button';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { AnularComponent } from './anular/anular.component';
import { ConsultarComponent } from './consultar/consultar.component';



@NgModule({
  declarations: [
    MatrimoniosComponent,
    ConsultarComponent    
  ],
  imports: [
    CommonModule,
    MatrimoniosRoutingModule,
    ButtonModule
  ]
})
export class MatrimoniosModule { }
