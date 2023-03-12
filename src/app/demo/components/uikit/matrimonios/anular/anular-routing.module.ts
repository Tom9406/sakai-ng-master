import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnularComponent } from './anular.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: AnularComponent }
  ])],
  exports: [RouterModule]
})
export class AnularRoutingModule { }
