import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from './consultar.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ConsultarComponent }
  ])],
  exports: [RouterModule]
})
export class ConsultarRoutingModule { }
