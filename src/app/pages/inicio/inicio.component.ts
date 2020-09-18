import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html"
})
export class InicioComponent implements OnInit {
  data: any;

  constructor() {

  }

  ngOnInit() {
    console.log("O componente SITUAÇÃO ECONÔMICA foi carregado");
  }
}
