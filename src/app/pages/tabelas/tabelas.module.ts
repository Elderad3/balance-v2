import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { TabelasRoutingModule } from './tabelas.rounting.module';
import { TabelasComponent } from './tabelas.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TabelasComponent],
  imports: [
    CommonModule, SharedModule, CoreModule, RouterModule, TabelasRoutingModule,
  ],
  providers: []
})
export class TabelasModule { }
