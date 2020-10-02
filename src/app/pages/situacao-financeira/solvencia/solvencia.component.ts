import { Balanco2 } from './../../../shared/models/balanco2.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solvencia',
  templateUrl: './solvencia.component.html'
})
export class SolvenciaComponent implements OnInit {

  @Input() b1: Balanco2;
  @Input() b2: Balanco2;

  grauSolvenciaB1: number = 0;
  grauSolvenciaB2: number = 0;

  ativoTotalB1: number = 0;
  ativoTotalB2: number = 0;

  passivoCirculanteTotalB1: number = 0;
  passivoCirculanteTotalB2: number = 0;

  passivoNaoCirculanteTotalB1: number = 0;
  passivoNaoCirculanteTotalB2: number = 0;

  constructor() { }

  ngOnInit() {
    this.ativoTotalB1 = this.b1.contas.filter(
      conta => conta.chave === "b1aTotal"
    )[0].valor;
    this.ativoTotalB2 = this.b2.contas.filter(
      conta => conta.chave === "b2aTotal"
    )[0].valor;
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

    this.grauSolvenciaB1 =
      (this.ativoTotalB1 /
        (this.passivoCirculanteTotalB1 + this.passivoNaoCirculanteTotalB1)) *
      100;
    this.grauSolvenciaB2 =
      (this.ativoTotalB2 /
        (this.passivoCirculanteTotalB2 + this.passivoNaoCirculanteTotalB2)) *
      100;
  }

}
