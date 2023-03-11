import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscribirComponent } from './inscribir.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: InscribirComponent }
  ])],
  exports: [RouterModule]
})
export class InscribirRoutingModule { }
