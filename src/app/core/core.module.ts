import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuContextComponent } from './components/menu-context/menu-context.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuContextComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, MenuContextComponent]
})
export class CoreModule { }
