
import { Balanco2 } from "./../../shared/models/balanco2.model";
import { BalancoService } from "./balanco.service"
import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-balanco",
  templateUrl: "./balanco.component.html"
})
export class BalancoComponent implements OnInit {
  @Input() b1: Balanco2;
  @Input() b2: Balanco2;

  @ViewChild("ativoForm", { static: false })
  ativoForm: NgForm;

  constructor(private balancoService: BalancoService) { }

  ngOnInit() {
    this.b1.ano = 2019;
    this.b2.ano = 2020;
  }

  atualizarAno2() {
    this.b2.ano = this.balancoService.atualizarAno2(this.b1.ano);
  }

  calcularTotaisB1() {
    this.balancoService.calcularTotais(this.b1);
  }

  calcularTotaisB2() {
    this.balancoService.calcularTotais(this.b2);
  }
  inserirContaB1(conta) {
    let novaConta1 = {
      id: conta.id - 9,
      chave: 'b1acNovaConta',
      classe: conta.classe,
      grupo: conta.grupo,
      nome: "Nova Conta",
      tipo: "A",
      valor: 0,
      sistema: 'N'
    }
    let novaConta2 = {
      id: conta.id - 9,
      chave: 'b2acNovaConta',
      classe: conta.classe,
      grupo: conta.grupo,
      nome: novaConta1.nome,
      tipo: "A",
      valor: 0,
      sistema: 'N'
    }

    this.b1.contas.push(novaConta1)
    this.b2.contas.push(novaConta2)
    this.b1.contas.sort(function (a, b) {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
    this.b2.contas.sort(function (a, b) {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
  }


}
