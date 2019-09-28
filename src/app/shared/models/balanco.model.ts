import { BaseResourceModel } from './base-resource.model';

export class Balanco extends BaseResourceModel{
  
     public ano: number = 2018
     public acCaixaBancos: number = 0
     public acContasReceber: number  = 0
     public acEstoque: number = 0
     public acTotal: number = 0

     public ancRealizavelLongoPrazo: number = 0
     public ancInvestimento: number = 0
     public ancImobilizado: number = 0
     public ancIntangivel: number = 0
     public ancTotal: number = 0
     
     public aTotal: number = 0

     public pcContasPagar: number = 0
     public pcFornecedores: number = 0
     public pcEmprestimos : number = 0
     public pcOutrasObrigacoes: number = 0
     public pcTotal: number = 0

     public pncExigivelLongoPrazo: number = 0
     public pncEmprestimosLp: number = 0
     public pncTotal: number = 0


     public plCapitalSocial: number = 0
     public plReservas: number = 0
     public plTotal: number = 0

     public pTotal: number = 0
}