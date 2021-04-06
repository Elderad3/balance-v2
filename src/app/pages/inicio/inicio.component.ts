import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html"
})
export class InicioComponent implements OnInit {
  titulo: string = 'Página Inicial'
  data: any;
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.titulo);
  }
}
