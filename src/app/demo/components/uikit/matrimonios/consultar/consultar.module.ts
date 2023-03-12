import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarRoutingModule } from './consultar-routing.module';
import { ConsultarComponent } from './consultar.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [ConsultarComponent],
  imports: [
    CommonModule,
    ConsultarRoutingModule,
    FormsModule,		
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule
  ]
})
export class ConsultarModule { }
