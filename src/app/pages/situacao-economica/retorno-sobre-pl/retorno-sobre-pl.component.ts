import { Dre } from './../../../shared/models/dre.model';
import { Balanco2 } from './../../../shared/models/balanco2.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retorno-sobre-pl',
  templateUrl: './retorno-sobre-pl.component.html'
})
export class RetornoSobrePlComponent implements OnInit {

  @Input() b1: Balanco2;
  @Input() b2: Balanco2;
  @Input() dre1: Dre
  @Input() dre2: Dre
  patrimonioLiquidoB1: number = 0
  patrimonioLiquidoB2: number = 0
  lucroLiquidoDre1: number = 0
  lucroLiquidoDre2: number = 0
  retornoSobrePl1: number = 0
  retornoSobrePl2: number = 0
  constructor() { }

  ngOnInit() {
    this.patrimonioLiquidoB1 = this.b1.contas.find(conta => conta.chave === "b1plTotal").valor;
    this.patrimonioLiquidoB2 = this.b2.contas.find(conta => conta.chave === "b2plTotal").valor;
    this.lucroLiquidoDre1 = this.dre1.contas.find(conta => conta.chave === 'dre1lleLucroLiquidoExercicio').valor
    this.lucroLiquidoDre2 = this.dre2.contas.find(conta => conta.chave === 'dre2lleLucroLiquidoExercicio').valor
    this.retornoSobrePl1 = (this.lucroLiquidoDre1 / this.patrimonioLiquidoB1) * 100
    this.retornoSobrePl2 = (this.lucroLiquidoDre2 / this.patrimonioLiquidoB2) * 100
  }

}
