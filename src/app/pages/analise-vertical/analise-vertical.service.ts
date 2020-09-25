import { AnaliseVertical } from './../../shared/models/analise-vertical.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AnaliseVerticalService {
  constructor() { }

  calcularAnaliseVertical(b1, b2) {
    let analises: AnaliseVertical[] = []
    let contasAnalisadas = [...b1.contas, ...b2.contas]
    let contaAtivoTotalB1 = contasAnalisadas.filter(conta => conta.chave === 'b1aTotal')
    let ativoTotalB1 = contaAtivoTotalB1[0].valor
    let contaAtivoTotalB2 = contasAnalisadas.filter(conta => conta.chave === 'b2aTotal')
    let ativoTotalB2 = contaAtivoTotalB2[0].valor

    let agrupados = this.agruparcontas(contasAnalisadas, 'nome');

    for (let key in agrupados) {
      let anv = new AnaliseVertical()
      agrupados[key].forEach(conta => {
        if (conta.chave.indexOf("b1") > -1) {
          anv.conta1 = conta
          anv.avAno1 = (anv.conta1.valor / ativoTotalB1) * 100
        } else {
          anv.conta2 = conta
          anv.avAno2 = (anv.conta2.valor / ativoTotalB2) * 100
        }
      })
      analises.push(anv)
    }
    return analises
  }

  agruparcontas(contas, propriedade) {
    return contas.reduce(function (total, obj) {
      let chave = obj[propriedade];
      if (!total[chave]) {
        total[chave] = [];
      }
      total[chave].push(obj);
      return total;
    }, {});
  }
}