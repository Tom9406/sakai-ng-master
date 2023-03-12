import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitarComponent } from './solicitar.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SolicitarComponent }
  ])],
  exports: [RouterModule]
})
export class SolicitarRoutingModule { }
