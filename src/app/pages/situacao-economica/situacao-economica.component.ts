import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-situacao-economica",
  templateUrl: "./situacao-economica.component.html"
})
export class SituacaoEconomicaComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("O componente SITUAÇÃO ECONÔMICA foi carregado");
  }
}
