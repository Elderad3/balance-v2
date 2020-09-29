import { Balanco2 } from './../../shared/models/balanco2.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BalancoService {
  constructor() { }

  atualizarAno2(ano1: number) {
    return ano1 + 1;
  }

  calcularTotais(balanco: Balanco2) {
    this.totalAtivoCirculante(balanco);
    this.totalAtivoNaoCirculante(balanco);
    this.totalAtivo(balanco);
    this.totalPassivoCirculante(balanco);
    this.totalPassivoNaoCirculante(balanco);
    this.totalPatrimonioLiquido(balanco);
    this.totalPassivo(balanco);
  }

  totalAtivoCirculante(balanco: Balanco2) {
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

  totalAtivoNaoCirculante(balanco: Balanco2) {
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

  totalAtivo(balanco: Balanco2) {
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

  totalPassivoCirculante(balanco: Balanco2) {
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

  totalPassivoNaoCirculante(balanco: Balanco2) {
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

  totalPatrimonioLiquido(balanco: Balanco2) {
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

  totalPassivo(balanco: Balanco2) {
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
