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

  emprestimosB1: number = 0
  emprestimosB2: number = 0

  investimentoB1: number = 0
  imobilizadoB1: number = 0
  intangivelB1: number = 0

  investimentoB2: number = 0
  imobilizadoB2: number = 0
  intangivelB2: number = 0

  partCapTercB1: number = 0;
  partCapTercB2: number = 0;

  endividamentoB1: number = 0
  endividamentoB2: number = 0

  dependenciaBancaria1: number = 0
  dependenciaBancaria2: number = 0

  imobilizacaoPlB1: number = 0
  imobilizacaoPlB2: number = 0
  constructor() { }

  ngOnInit() {
    this.passivoCirculanteTotalB1 = this.b1.contas.find(conta => conta.chave === "b1pcTotal").valor;
    this.passivoCirculanteTotalB2 = this.b2.contas.find(conta => conta.chave === "b2pcTotal").valor;
    this.passivoNaoCirculanteTotalB1 = this.b1.contas.find(conta => conta.chave === "b1pncTotal").valor;
    this.passivoNaoCirculanteTotalB2 = this.b2.contas.find(conta => conta.chave === "b2pncTotal").valor;
    this.patrimonioLiquidoB1 = this.b1.contas.find(conta => conta.chave === "b1plTotal").valor;
    this.patrimonioLiquidoB2 = this.b2.contas.find(conta => conta.chave === "b2plTotal").valor;
    this.emprestimosB1 = this.b1.contas.find(conta => conta.chave === 'b1pcEmprestimos').valor
    this.emprestimosB2 = this.b2.contas.find(conta => conta.chave === 'b2pcEmprestimos').valor
    this.investimentoB1 = this.b1.contas.find(conta => conta.chave === 'b1ancInvestimento').valor
    this.investimentoB2 = this.b2.contas.find(conta => conta.chave === 'b2ancInvestimento').valor
    this.imobilizadoB1 = this.b1.contas.find(conta => conta.chave === 'b1ancImobilizado').valor
    this.imobilizadoB2 = this.b2.contas.find(conta => conta.chave === 'b2ancImobilizado').valor
    this.intangivelB1 = this.b1.contas.find(conta => conta.chave === 'b1ancIntangivel').valor
    this.intangivelB2 = this.b2.contas.find(conta => conta.chave === 'b2ancIntangivel').valor
    //PCT = (PC + PNC) / PL x 100
    this.partCapTercB1 = ((this.passivoCirculanteTotalB1 + this.passivoNaoCirculanteTotalB1) / this.patrimonioLiquidoB1) * 100;
    this.partCapTercB2 = ((this.passivoCirculanteTotalB2 + this.passivoNaoCirculanteTotalB2) / this.patrimonioLiquidoB2) * 100;
    //CE = PC / PC + PNC x 100
    this.endividamentoB1 = (this.passivoCirculanteTotalB1 / (this.passivoCirculanteTotalB1 + this.passivoNaoCirculanteTotalB1)) * 100
    this.endividamentoB2 = (this.passivoCirculanteTotalB2 / (this.passivoCirculanteTotalB2 + this.passivoNaoCirculanteTotalB2)) * 100
    //DB = Empréstimos / PL x 100
    this.dependenciaBancaria1 = (this.emprestimosB1 / this.patrimonioLiquidoB1) * 100
    this.dependenciaBancaria2 = (this.emprestimosB2 / this.patrimonioLiquidoB2) * 100
    //IPL =  Investimento + Imobilizado + Intangível / PL x 100
    this.imobilizacaoPlB1 = ((this.investimentoB1 + this.imobilizadoB1 + this.intangivelB1) / this.patrimonioLiquidoB1) * 100
    this.imobilizacaoPlB2 = ((this.investimentoB2 + this.imobilizadoB2 + this.intangivelB2) / this.patrimonioLiquidoB2) * 100

  }


}
