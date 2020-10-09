import { Dre } from './../../../shared/models/dre.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retorno-sobre-vendas',
  templateUrl: './retorno-sobre-vendas.component.html'
})
export class RetornoSobreVendasComponent implements OnInit {

  @Input() dre1: Dre
  @Input() dre2: Dre
  vendasLiquidasDre1: number = 0
  vendasLiquidasDre2: number = 0
  lucroLiquidoDre1: number = 0
  lucroLiquidoDre2: number = 0
  retornoSobreVendas1: number = 0
  retornoSobreVendas2: number = 0
  constructor() { }

  ngOnInit() {
    this.lucroLiquidoDre1 = this.dre1.contas.find(conta => conta.chave === 'dre1lleLucroLiquidoExercicio').valor
    this.lucroLiquidoDre2 = this.dre2.contas.find(conta => conta.chave === 'dre2lleLucroLiquidoExercicio').valor
    this.vendasLiquidasDre1 = this.dre1.contas.find(conta => conta.chave === 'dre1rolReceitaOperacionalLiquida').valor
    this.vendasLiquidasDre2 = this.dre2.contas.find(conta => conta.chave === 'dre2rolReceitaOperacionalLiquida').valor
    this.retornoSobreVendas1 = (this.lucroLiquidoDre1 / this.vendasLiquidasDre1) * 100
    this.retornoSobreVendas2 = (this.lucroLiquidoDre2 / this.vendasLiquidasDre2) * 100
  }
}
