import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BalancoService {
  constructor() { }

  atualizarAno2(ano1: number) {
    return ano1 + 1;
  }

  calcularTotais(balanco) {
    this.totalAtivoCirculante(balanco);
    this.totalAtivoNaoCirculante(balanco);
    this.totalAtivo(balanco);
    this.totalPassivoCirculante(balanco);
    this.totalPassivoNaoCirculante(balanco);
    this.totalPatrimonioLiquido(balanco);
    this.totalPassivo(balanco);
  }

  totalAtivoCirculante(balanco) {
    let contasfiltradas = balanco.contas.filter(
      conta => conta.classe === "ac" && conta.tipo === "A"
    );
    let total = contasfiltradas.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    balanco.contas.forEach(conta =>
      conta.classe === "ac" && conta.tipo === "S"
        ? (conta.valor = total)
        : undefined
    );
  }

  totalAtivoNaoCirculante(balanco) {
    let contasfiltradas = balanco.contas.filter(
      conta => conta.classe === "anc" && conta.tipo === "A"
    );
    let total = contasfiltradas.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    balanco.contas.forEach(conta =>
      conta.classe === "anc" && conta.tipo === "S"
        ? (conta.valor = total)
        : undefined
    );
  }

  totalAtivo(balanco) {
    let contasfiltradas = balanco.contas.filter(
      conta =>
        (conta.classe === "ac" && conta.tipo === "A") ||
        (conta.classe === "anc" && conta.tipo === "A")
    );
    let total = contasfiltradas.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    balanco.contas.forEach(conta =>
      conta.classe === "aTotal" ? (conta.valor = total) : undefined
    );
  }

  totalPassivoCirculante(balanco) {
    let contasfiltradas = balanco.contas.filter(
      conta => conta.classe === "pc" && conta.tipo === "A"
    );
    let total = contasfiltradas.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    balanco.contas.forEach(conta =>
      conta.classe === "pc" && conta.tipo === "S"
        ? (conta.valor = total)
        : undefined
    );
  }

  totalPassivoNaoCirculante(balanco) {
    let contasfiltradas = balanco.contas.filter(
      conta => conta.classe === "pnc" && conta.tipo === "A"
    );
    let total = contasfiltradas.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    balanco.contas.forEach(conta =>
      conta.classe === "pnc" && conta.tipo === "S"
        ? (conta.valor = total)
        : undefined
    );
  }

  totalPatrimonioLiquido(balanco) {
    let contasfiltradas = balanco.contas.filter(
      conta => conta.classe === "pl" && conta.tipo === "A"
    );
    let total = contasfiltradas.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    balanco.contas.forEach(conta =>
      conta.classe === "pl" && conta.tipo === "S"
        ? (conta.valor = total)
        : undefined
    );
  }

  totalPassivo(balanco) {
    let contasfiltradas = balanco.contas.filter(
      conta =>
        (conta.classe === "pc" && conta.tipo === "A") ||
        (conta.classe === "pnc" && conta.tipo === "A") ||
        (conta.classe === "pl" && conta.tipo === "A")
    );
    let total = contasfiltradas.reduce(function (a, b) {
      return a + b["valor"];
    }, 0);
    balanco.contas.forEach(conta =>
      conta.classe === "pTotal" ? (conta.valor = total) : undefined
    );
  }
}
