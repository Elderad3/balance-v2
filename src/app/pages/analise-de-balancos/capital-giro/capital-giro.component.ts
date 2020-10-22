import { Balanco2 } from "./../../../shared/models/balanco2.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-capital-giro",
  templateUrl: "./capital-giro.component.html"
})
export class CapitalGiroComponent implements OnInit {
  @Input() b1: Balanco2;
  @Input() b2: Balanco2;

  ativoCirculanteB1: number = 0;
  ativoCirculanteB2: number = 0;

  ativoNaoCirculanteB1: number = 0;
  ativoNaoCirculanteB2: number = 0;

  passivoCirculanteB1: number = 0;
  passivoCirculanteB2: number = 0;

  passivoNaoCirculanteB1: number = 0;
  passivoNaoCirculanteB2: number = 0;

  patrimonioLiquidoB1: number = 0;
  patrimonioLiquidoB2: number = 0;

  cclB1: number = 0;
  cclB2: number = 0;

  cgpB1: number = 0;
  cgpB2: number = 0;
  constructor() {
  }

  ngOnInit() {
    this.ativoCirculanteB1 = this.b1.contas.filter(
      conta => conta.chave === "b1acTotal"
    )[0].valor;

    this.ativoCirculanteB2 = this.b2.contas.filter(
      conta => conta.chave === "b2acTotal"
    )[0].valor;

    this.ativoNaoCirculanteB1 = this.b1.contas.filter(
      conta => conta.chave === "b1ancTotal"
    )[0].valor;
    this.ativoNaoCirculanteB2 = this.b2.contas.filter(
      conta => conta.chave === "b2ancTotal"
    )[0].valor;

    this.passivoCirculanteB1 = this.b1.contas.filter(
      conta => conta.chave === "b1pcTotal"
    )[0].valor;
    this.passivoCirculanteB2 = this.b2.contas.filter(
      conta => conta.chave === "b2pcTotal"
    )[0].valor;

    this.patrimonioLiquidoB1 = this.b1.contas.filter(
      conta => conta.chave === "b1plTotal"
    )[0].valor;
    this.patrimonioLiquidoB2 = this.b2.contas.filter(
      conta => conta.chave === "b2plTotal"
    )[0].valor;

    this.cclB1 = this.ativoCirculanteB1 - this.passivoCirculanteB1;
    this.cclB2 = this.ativoCirculanteB2 - this.passivoCirculanteB2;

    this.cgpB1 = this.patrimonioLiquidoB1 - this.ativoNaoCirculanteB1;
    this.cgpB2 = this.patrimonioLiquidoB2 - this.ativoNaoCirculanteB2;
  }
}
