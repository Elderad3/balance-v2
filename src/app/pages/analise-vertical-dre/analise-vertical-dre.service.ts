import { AnaliseVertical } from './../../shared/models/analise-vertical.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AnaliseVerticalDreService {
  constructor() { }

  calcularAnaliseVerticalDre(dre1, dre2) {
    let analises: AnaliseVertical[] = []
    let contasAnalisadas = [...dre1.contas, ...dre2.contas]
    let contareceitaOpLiquidaDre1 = contasAnalisadas.filter(conta => conta.chave === 'dre1rolReceitaOperacionalLiquida')
    let receitaOpLiquidaDre1 = contareceitaOpLiquidaDre1[0].valor
    let contareceitaOpLiquidaDre2 = contasAnalisadas.filter(conta => conta.chave === 'dre2rolReceitaOperacionalLiquida')
    let receitaOpLiquidaDre2 = contareceitaOpLiquidaDre2[0].valor

    let agrupados = this.agruparcontas(contasAnalisadas, 'nome');

    for (let key in agrupados) {
      let anv = new AnaliseVertical()
      agrupados[key].forEach(conta => {
        if (conta.chave.indexOf("dre1") > -1) {
          anv.conta1 = conta
          anv.avAno1 = (anv.conta1.valor / receitaOpLiquidaDre1) * 100
        } else {
          anv.conta2 = conta
          anv.avAno2 = (anv.conta2.valor / receitaOpLiquidaDre2) * 100
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