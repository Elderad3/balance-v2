import { Dre } from './../../../../shared/models/dre.model';
import { Balanco2 } from './../../../../shared/models/balanco2.model';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-giro-ativo',
  templateUrl: './giro-ativo.component.html'
})
export class GiroAtivoComponent implements OnInit {

  @Input() b1: Balanco2;
  @Input() b2: Balanco2;
  @Input() dre1: Dre
  @Input() dre2: Dre
  ativoTotalB1: number = 0
  ativoTotalB2: number = 0
  vendasLiquidasDre1: number = 0
  vendasLiquidasDre2: number = 0
  giroAtivo1: number = 0
  giroAtivo2: number = 0
  constructor() { }

  ngOnInit() {
    this.ativoTotalB1 = this.b1.contas.find(conta => conta.chave === "b1aTotal").valor;
    this.ativoTotalB2 = this.b2.contas.find(conta => conta.chave === "b2aTotal").valor;
    this.vendasLiquidasDre1 = this.dre1.contas.find(conta => conta.chave === 'dre1rolReceitaOperacionalLiquida').valor
    this.vendasLiquidasDre2 = this.dre2.contas.find(conta => conta.chave === 'dre2rolReceitaOperacionalLiquida').valor
    this.giroAtivo1 = this.vendasLiquidasDre1 / this.ativoTotalB1
    this.giroAtivo2 = this.vendasLiquidasDre2 / this.ativoTotalB2
  }

}
