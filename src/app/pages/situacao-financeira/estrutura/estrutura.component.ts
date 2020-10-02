import { Balanco2 } from './../../../shared/models/balanco2.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estrutura',
  templateUrl: './estrutura.component.html'
})
export class EstruturaComponent implements OnInit {

  @Input() b1: Balanco2;
  @Input() b2: Balanco2;

  passivoCirculanteTotalB1: number = 0;
  passivoCirculanteTotalB2: number = 0;

  passivoNaoCirculanteTotalB1: number = 0;
  passivoNaoCirculanteTotalB2: number = 0;

  patrimonioLiquidoB1: number = 0;
  patrimonioLiquidoB2: number = 0;

  partCapTercB1: number = 0;
  partCapTercB2: number = 0;

  constructor() { }

  ngOnInit() {
    this.passivoCirculanteTotalB1 = this.b1.contas.filter(
      conta => conta.chave === "b1pcTotal"
    )[0].valor;
    this.passivoCirculanteTotalB2 = this.b2.contas.filter(
      conta => conta.chave === "b2pcTotal"
    )[0].valor;

    this.passivoNaoCirculanteTotalB1 = this.b1.contas.filter(
      conta => conta.chave === "b1pncTotal"
    )[0].valor;
    this.passivoNaoCirculanteTotalB2 = this.b2.contas.filter(
      conta => conta.chave === "b2pncTotal"
    )[0].valor;
    this.patrimonioLiquidoB1 = this.b1.contas.filter(
      conta => conta.chave === "b1plTotal"
    )[0].valor;
    this.patrimonioLiquidoB2 = this.b2.contas.filter(
      conta => conta.chave === "b2plTotal"
    )[0].valor;
    //PCT = (PC + PNC) / PL x 100
    this.partCapTercB1 =
      ((this.passivoCirculanteTotalB1 + this.passivoNaoCirculanteTotalB1) /
        this.patrimonioLiquidoB1) *
      100;
    this.partCapTercB2 =
      ((this.passivoCirculanteTotalB2 + this.passivoNaoCirculanteTotalB2) /
        this.patrimonioLiquidoB2) *
      100;
  }


}
