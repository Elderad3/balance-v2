import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuContextComponent } from './components/menu-context/menu-context.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SettingsComponent, MenuComponent, MenuContextComponent],
  imports: [CommonModule, RouterModule],
  exports:[HeaderComponent, FooterComponent, SettingsComponent, MenuComponent,MenuContextComponent]
})
export class CoreModule { }
