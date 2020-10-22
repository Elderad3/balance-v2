import { Dre } from './../../../../shared/models/dre.model';
import { Balanco2 } from './../../../../shared/models/balanco2.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retorno-sobre-ativo',
  templateUrl: './retorno-sobre-ativo.component.html'
})
export class RetornoSobreAtivoComponent implements OnInit {

  @Input() b1: Balanco2;
  @Input() b2: Balanco2;
  @Input() dre1: Dre
  @Input() dre2: Dre
  ativoTotalB1: number = 0
  ativoTotalB2: number = 0
  lucroLiquidoDre1: number = 0
  lucroLiquidoDre2: number = 0
  retornoSobreAtivo1: number = 0
  retornoSobreAtivo2: number = 0
  constructor() { }

  ngOnInit() {
    this.ativoTotalB1 = this.b1.contas.find(conta => conta.chave === "b1aTotal").valor;
    this.ativoTotalB2 = this.b2.contas.find(conta => conta.chave === "b2aTotal").valor;
    this.lucroLiquidoDre1 = this.dre1.contas.find(conta => conta.chave === 'dre1lleLucroLiquidoExercicio').valor
    this.lucroLiquidoDre2 = this.dre2.contas.find(conta => conta.chave === 'dre2lleLucroLiquidoExercicio').valor
    this.retornoSobreAtivo1 = (this.lucroLiquidoDre1 / this.ativoTotalB1) * 100
    this.retornoSobreAtivo2 = (this.lucroLiquidoDre2 / this.ativoTotalB2) * 100
  }
}
