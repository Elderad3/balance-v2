import { AnaliseDeProjetosMainComponent } from './analise-de-projetos-main/analise-de-projetos-main.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AnaliseDeProjetosMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnaliseDeProjetosRoutingModule { }