import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalancoService {

  constructor() { }

  totalAtivoCirculante(caixa: number, contasReceber : number, estoques: number):number{
    return caixa + contasReceber + estoques
  }

  totalAtivoNaoCirculante(rlp: number, investimento: number, imobilizado:number, intangivel):number{
    return rlp + investimento + intangivel+ imobilizado
  }

  totalAtivo(totalAtivoCirculante: number, totalAtivoNaoCirculante):number{
    return totalAtivoCirculante + totalAtivoNaoCirculante
  }

  totalPassivoCirculante(contasApagar: number, fornecedores : number, emprestimos: number, outrasObrigacoes: number):number{
    return contasApagar + fornecedores + emprestimos + outrasObrigacoes
  }

  totalPassivoNaoCirculante(elp: number, emprestimoLp: number):number{
    return elp + emprestimoLp
  }

  totalPatrimonioLiquido(capitalSocial: number, reservas: number):number{
    return capitalSocial + reservas
  }

  totalPassivo(totalPassivoCirculante: number, totalPassivoNaoCirculante: number, totalPatrimonioLiquido: number):number{
    return  totalPassivoCirculante + totalPassivoNaoCirculante + totalPatrimonioLiquido
  }
}


