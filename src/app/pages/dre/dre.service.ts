import { Dre } from './../../shared/models/dre.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DreService {
  constructor() { }

  calcularTotais(dre: Dre) {
    this.totalReceitaOperacionalLiquida(dre);
    this.totalResultadoBruto(dre)
    this.totalResultadoAntesDoIr(dre)
    this.totalLucroLiquido(dre)
  }

  totalReceitaOperacionalLiquida(dre: Dre) {
    let contasfiltradasReceitaBruta = dre.contas.filter(
      conta => conta.classe === "rob" && conta.tipo === "A"
    );
    let contasfiltradasDeducaoReceitaBruta = dre.contas.filter(
      conta => conta.classe === "dedRob" && conta.tipo === "A"
    );
    let totalReceitaBruta = contasfiltradasReceitaBruta.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    let totalDeducaoReceitaBruta = contasfiltradasDeducaoReceitaBruta.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    dre.contas.forEach(conta =>
      conta.classe === "rol" && conta.tipo === "S"
        ? (conta.valor = totalReceitaBruta - totalDeducaoReceitaBruta)
        : undefined
    );
  }

  totalResultadoBruto(dre: Dre) {
    let contasfiltradasReceitaLiquida = dre.contas.filter(
      conta => conta.classe === "rol"
    );
    let contasfiltradasCustosProdutosVendidos = dre.contas.filter(
      conta => conta.classe === "cpv"
    );
    let totalReceitaLiquida = contasfiltradasReceitaLiquida.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    let totalCpv = contasfiltradasCustosProdutosVendidos.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    dre.contas.forEach(conta =>
      conta.classe === "reb"
        ? (conta.valor = totalReceitaLiquida - totalCpv)
        : undefined
    );
  }

  totalResultadoAntesDoIr(dre: Dre) {
    let contasfiltradasResultadoBruto = dre.contas.filter(
      conta => conta.classe === "reb"
    );
    let contasfiltradasDespesasOperacionais = dre.contas.filter(
      conta => conta.classe === "dop"
    );
    let contasfiltradasDespesasFinanceiras = dre.contas.filter(
      conta => conta.classe === "def"
    );
    let contasfiltradasReceitaFinanceira = dre.contas.filter(
      conta => conta.classe === "ref"
    );
    let totalResultadoBruto = contasfiltradasResultadoBruto.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    let totalDespesasOp = contasfiltradasDespesasOperacionais.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    let totalDespesasFin = contasfiltradasDespesasFinanceiras.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    let totalReceitaFinanceira = contasfiltradasReceitaFinanceira.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);

    dre.contas.forEach(conta =>
      conta.classe === "rir"
        ? (conta.valor = totalResultadoBruto - totalDespesasOp - totalDespesasFin + totalReceitaFinanceira)
        : undefined
    );
  }

  totalLucroLiquido(dre: Dre) {
    let contasfiltradasResultadoAntesDoIr = dre.contas.filter(
      conta => conta.classe === "rir" && conta.tipo === "S"
    );
    let contasfiltradasIr = dre.contas.filter(
      conta => conta.classe === "ircsll" && conta.tipo === "A"
    );
    let contasfiltradasParticipacao = dre.contas.filter(
      conta => conta.classe === "par" && conta.tipo === "A"
    );
    let totalResultadoAntesDoIr = contasfiltradasResultadoAntesDoIr.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    let totalIr = contasfiltradasIr.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    let participacao = contasfiltradasParticipacao.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    dre.contas.forEach(conta =>
      conta.classe === "lle"
        ? (conta.valor = totalResultadoAntesDoIr - totalIr - participacao)
        : undefined
    );
  }



}
