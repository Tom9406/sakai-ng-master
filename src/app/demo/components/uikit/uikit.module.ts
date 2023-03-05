import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIkitRoutingModule } from './uikit-routing.module';
import { NacimientosComponent } from './nacimientos/nacimientos.component';


@NgModule({
	imports: [
		CommonModule,
		UIkitRoutingModule
	],
	declarations: [	
    NacimientosComponent
  ]
})
export class UIkitModule { }
