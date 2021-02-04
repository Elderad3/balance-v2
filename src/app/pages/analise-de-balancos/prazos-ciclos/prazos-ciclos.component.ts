import { Dre } from './../../../shared/models/dre.model';
import { Balanco2 } from './../../../shared/models/balanco2.model';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prazos-ciclos',
  templateUrl: './prazos-ciclos.component.html'
})
export class PrazosCilcosComponent implements OnInit {

  @Input() b1: Balanco2;
  @Input() b2: Balanco2;
  @Input() dre1: Dre
  @Input() dre2: Dre

  estoqueAno1: number = 0
  estoqueAno2: number = 0
  estoqueMedio: number = 0
  custoProdutosVendidosB2: number = 0
  pmreB2: number = 0

  contasReceberAno1: number = 0
  contasReceberAno2: number = 0
  contasReceberMedia: number = 0
  receitaOperacionalLiquidaB2: number = 0
  pmrvB2: number = 0

  fornecedoresMedia: number = 0
  comprasB2: number = 0
  fornecedoresAno1: number = 0
  fornecedoresAno2: number = 0
  pmpcB2: number = 0

  cicloOperacional: number = 0
  cicloFinanceiro: number = 0


  constructor() { }

  ngOnInit() {
    this.estoqueAno1 = this.b1.contas.find(conta => conta.chave === 'b1acEstoque').valor
    this.estoqueAno2 = this.b2.contas.find(conta => conta.chave === 'b2acEstoque').valor
    this.estoqueMedio = (this.estoqueAno1 + this.estoqueAno2) / 2
    this.custoProdutosVendidosB2 = this.dre2.contas.find(conta => conta.chave === 'dre2cpvCustoProdutoVendido').valor
    this.pmreB2 = (this.estoqueMedio / this.custoProdutosVendidosB2) * 360

    this.contasReceberAno1 = this.b1.contas.find(conta => conta.chave === 'b1acContasAReceber').valor
    this.contasReceberAno2 = this.b2.contas.find(conta => conta.chave === 'b2acContasAReceber').valor
    this.contasReceberMedia = (this.contasReceberAno1 + this.contasReceberAno2) / 2
    this.receitaOperacionalLiquidaB2 = this.dre2.contas.find(conta => conta.chave === 'dre2rolReceitaOperacionalLiquida').valor
    this.pmrvB2 = (this.contasReceberMedia / this.receitaOperacionalLiquidaB2) * 360

    this.fornecedoresAno1 = this.b1.contas.find(conta => conta.chave === 'b1pcFornecedores').valor
    this.fornecedoresAno2 = this.b2.contas.find(conta => conta.chave === 'b2pcFornecedores').valor
    this.fornecedoresMedia = (this.fornecedoresAno1 + this.fornecedoresAno2) / 2
    this.comprasB2 = this.custoProdutosVendidosB2 + this.estoqueAno2 - this.estoqueAno1
    this.pmpcB2 = (this.fornecedoresMedia / this.comprasB2) * 360

    this.cicloOperacional = this.pmreB2 + this.pmrvB2
    this.cicloFinanceiro = this.cicloOperacional - this.pmpcB2


  }

}
