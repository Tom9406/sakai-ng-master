import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatrimoniosComponent } from './matrimonios.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
 
    { path: '', component: MatrimoniosComponent },
    { path: 'inscribir', data: { breadcrumb: 'Inscribir Matrimonio' }, loadChildren: () => import('./inscribir/inscribir.module').then(m => m.InscribirModule) },
    { path: '**', redirectTo: '/notfound' }
	])],
  exports: [RouterModule]
})
export class MatrimoniosRoutingModule { }
