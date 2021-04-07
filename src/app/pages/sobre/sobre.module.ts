import { CoreModule } from './../../core/core.module';
import { SharedModule } from './../../shared/shared.module';
import { SobreRoutingModule } from './sobre.rounting.module';
import { SobreComponent } from './sobre.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SobreComponent],
  imports: [
    CommonModule, SharedModule, CoreModule, RouterModule, SobreRoutingModule,
  ],
  providers: []
})
export class SobreModule { }
