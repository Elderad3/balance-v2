import { ChartModule } from 'primeng/chart';
import { DialogMensageComponent } from './components/dialog-mensage/dialog-mensage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { FormMensagensComponent } from './components/form-mensagens/form-mensagens.component';
import { GraficoComponent } from './components/grafico/grafico.component';


@NgModule({
  declarations: [
    FormMensagensComponent,
    DialogMensageComponent, GraficoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartModule

  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    GraficoComponent,

    FormMensagensComponent,
    DialogMensageComponent
  ],
  providers: [],
})
export class SharedModule {

  // componentes, serviços etc, que podem ou não serem utilizados por um componente principal. 
  //Não são obrigatórios pro sistema como um todo funcionar

}
