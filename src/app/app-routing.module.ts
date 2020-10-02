import { BalancoComponent } from './pages/balanco/balanco.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const ROTAS: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'analise-de-balanco', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeMainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROTAS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
