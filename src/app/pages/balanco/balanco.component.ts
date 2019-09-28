import { BalancoService } from './balanco.service';
import { Balanco } from './../../shared/models/balanco.model';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-balanco',
  templateUrl: './balanco.component.html'
})
export class BalancoComponent implements OnInit {


  @Input() b1: Balanco
  @Input() b2: Balanco

  @ViewChild("ativoForm", { static: false })
  ativoForm: NgForm

  constructor(private balancoService: BalancoService) { }

  ngOnInit() {
    console.log("Componente BALANÇO foi carregado")
  }

  totalAtivoCirculanteB1() {
    this.b1.acTotal = this.balancoService.totalAtivoCirculante(this.b1.acCaixaBancos, this.b1.acContasReceber, this.b1.acEstoque)
    this.totalAtivoB1()
  }
  totalAtivoCirculanteB2() {
    this.b2.acTotal = this.balancoService.totalAtivoCirculante(this.b2.acCaixaBancos, this.b2.acContasReceber, this.b2.acEstoque)
    this.totalAtivoB2()
  }

  totalAtivoNaoCirculanteB1() {
    this.b1.ancTotal = this.balancoService.totalAtivoNaoCirculante(
      this.b1.ancRealizavelLongoPrazo, this.b1.ancInvestimento, this.b1.ancImobilizado, this.b1.ancIntangivel)
    this.totalAtivoB1()

  }
  totalAtivoNaoCirculanteB2() {
    this.b2.ancTotal = this.balancoService.totalAtivoNaoCirculante(
      this.b2.ancRealizavelLongoPrazo, this.b2.ancInvestimento, this.b2.ancImobilizado, this.b2.ancIntangivel)
    this.totalAtivoB2()
  }

  totalAtivoB1() {
    this.b1.aTotal = this.balancoService.totalAtivo(this.b1.acTotal, this.b1.ancTotal)
  }

  totalAtivoB2() {
    this.b2.aTotal = this.balancoService.totalAtivo(this.b2.acTotal, this.b2.ancTotal)
  }

  totalPassivoCirculanteB1() {
    this.b1.pcTotal = this.balancoService.totalPassivoCirculante(this.b1.pcContasPagar, this.b1.pcFornecedores, this.b1.pcEmprestimos, this.b1.pcOutrasObrigacoes)
    this.totalPassivoB1()
  }
  totalPassivoCirculanteB2() {
    this.b2.pcTotal = this.balancoService.totalPassivoCirculante(this.b2.pcContasPagar, this.b2.pcFornecedores, this.b2.pcEmprestimos, this.b2.pcOutrasObrigacoes)
    this.totalPassivoB2()
  }

  totalPassivoNaoCirculanteB1() {
    this.b1.pncTotal = this.balancoService.totalPassivoNaoCirculante(this.b1.pncExigivelLongoPrazo, this.b1.pncEmprestimosLp)
    this.totalPassivoB1()

  }
  totalPassivoNaoCirculanteB2() {
    this.b2.pncTotal = this.balancoService.totalPassivoNaoCirculante(this.b2.pncExigivelLongoPrazo, this.b2.pncEmprestimosLp)
    this.totalPassivoB2()
  }

  totalPatrimonioLiquidoB1(){
    this.b1.plTotal = this.balancoService.totalPatrimonioLiquido(this.b1.plCapitalSocial, this.b1.plReservas)
    this.totalPassivoB1()
  }

  totalPatrimonioLiquidoB2(){
    this.b2.plTotal = this.balancoService.totalPatrimonioLiquido(this.b2.plCapitalSocial, this.b2.plReservas)
    this.totalPassivoB2()
  }

  totalPassivoB1() {
    this.b1.pTotal = this.balancoService.totalPassivo(this.b1.pcTotal, this.b1.pncTotal, this.b1.plTotal)
  }

  totalPassivoB2() {
    this.b2.pTotal = this.balancoService.totalPassivo(this.b2.pcTotal, this.b2.pncTotal, this.b2.plTotal)
  }

  }

