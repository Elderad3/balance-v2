import { AnaliseHorizontal } from './../../shared/models/analise-horizontal.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AnaliseHorizontalService {

  constructor() { }

  calcularAnaliseHorizontal(b1, b2) {
    let analises: AnaliseHorizontal[] = []
    let contasAnalisadas = [...b1.contas, ...b2.contas]
    var agrupados = this.agruparContas(contasAnalisadas, "nome");

    for (let key in agrupados) {
      let anh = new AnaliseHorizontal();
      agrupados[key].forEach(element => {
        if (element.chave.indexOf("b1") > -1) {
          anh.conta1 = element;
          anh.ahAno1 = (anh.conta1.valor / anh.conta1.valor - 1) * 100;
          if (anh.conta1.valor === null || anh.conta1.valor === undefined) {
            anh.conta1.valor = 0
          }
        } else {
          anh.conta2 = element;
          anh.ahAno2 =
            (anh.conta2.valor / anh.conta1.valor - 1) * 100;
        }
      });
      analises.push(anh);
    }
    return analises
  }

  agruparContas(contas, propriedade) {
    return contas.reduce(function (total, obj) {
      let chave = obj[propriedade];
      if (!total[chave]) {
        total[chave] = [];
      }
      total[chave].push(obj);
      return total;
    }, {});
  };
}