import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const ROTAS: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },

  // { path: 'usuarioMain', loadChildren: () => import('./pages/home/usuario-main/usuario-main.module').then(m => m.UsuarioMainModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(ROTAS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
