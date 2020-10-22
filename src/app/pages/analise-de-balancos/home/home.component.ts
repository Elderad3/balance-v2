import { Conta } from './../../../shared/models/conta.model';
import { Dre } from './../../../shared/models/dre.model';
import { Balanco2 } from './../../../shared/models/balanco2.model';

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  b1: Balanco2 = new Balanco2();
  b2: Balanco2 = new Balanco2();
  dre1: Dre = new Dre()
  dre2: Dre = new Dre()

  contasB1: Conta[] = [
    {
      id: 10,
      nome: "Caixa e banco",
      grupo: "ativo",
      classe: "ac",
      valor: 98389,
      tipo: "A",
      chave: "b1acCaixaBancos",
      sistema: 'S'
    },
    {
      id: 20,
      nome: "Contas a receber",
      grupo: "ativo",
      classe: "ac",
      valor: 266693,
      tipo: "A",
      chave: "b1acContasAReceber",
      sistema: 'S'
    },
    {
      id: 30,
      nome: "Estoque",
      grupo: "ativo",
      classe: "ac",
      valor: 181939,
      tipo: "A",
      chave: "b1acEstoque",
      sistema: 'S'
    },
    {
      id: 40,
      nome: "Ativo Circulante",
      grupo: "ativo",
      classe: "ac",
      valor: 547021,
      tipo: "S",
      chave: "b1acTotal",
      sistema: 'S'
    },
    {
      id: 50,
      nome: "Realizável a Longo Prazo",
      grupo: "ativo",
      classe: "anc",
      valor: 260294,
      tipo: "A",
      chave: "b1ancRealizavelLongoPrazo",
      sistema: 'S'
    },
    {
      id: 60,
      nome: "Investimento",
      grupo: "ativo",
      classe: "anc",
      valor: 277,
      tipo: "A",
      chave: "b1ancInvestimento",
      sistema: 'S'
    },
    {
      id: 70,
      nome: "Imobilizado",
      grupo: "ativo",
      classe: "anc",
      valor: 426560,
      tipo: "A",
      chave: "b1ancImobilizado",
      sistema: 'S'
    },
    {
      id: 80,
      nome: "Intangível",
      grupo: "ativo",
      classe: "anc",
      valor: 19683,
      tipo: "A",
      chave: "b1ancIntangivel",
      sistema: 'S'
    },
    {
      id: 90,
      nome: "Ativo Não Circulante",
      grupo: "ativo",
      classe: "anc",
      valor: 706814,
      tipo: "S",
      chave: "b1ancTotal",
      sistema: 'S'
    },
    {
      id: 100,
      nome: "Ativo Total",
      grupo: "ativo",
      classe: "aTotal",
      valor: 1253835,
      tipo: "S",
      chave: "b1aTotal",
      sistema: 'S'
    },
    {
      id: 110,
      nome: "Contas a Pagar",
      grupo: "passivo",
      classe: "pc",
      valor: 81352,
      tipo: "A",
      chave: "b1pcContasPagar",
      sistema: 'S'
    },
    {
      id: 120,
      nome: "Fornecedores",
      grupo: "passivo",
      classe: "pc",
      valor: 130605,
      tipo: "A",
      chave: "b1pcFornecedores",
      sistema: 'S'
    },
    {
      id: 130,
      nome: "Empréstimos",
      grupo: "passivo",
      classe: "pc",
      valor: 207285,
      tipo: "A",
      chave: "b1pcEmprestimos",
      sistema: 'S'
    },
    {
      id: 140,
      nome: "Outras Obrigações",
      grupo: "passivo",
      classe: "pc",
      valor: 21584,
      tipo: "A",
      chave: "b1pcOutrasObrigacoes",
      sistema: 'S'
    },
    {
      id: 150,
      nome: "Passivo Circulante",
      grupo: "passivo",
      classe: "pc",
      valor: 440826,
      tipo: "S",
      chave: "b1pcTotal",
      sistema: 'S'
    },
    {
      id: 160,
      nome: "Exigível a Longo Prazo",
      grupo: "passivo",
      classe: "pnc",
      valor: 192847,
      tipo: "A",
      chave: "b1pncExigivelLongoPrazo",
      sistema: 'S'
    },
    {
      id: 170,
      nome: "Empréstimos a Longo prazo",
      grupo: "passivo",
      classe: "pnc",
      valor: 340961,
      tipo: "A",
      chave: "b1pncEmprestimosLongoPrazo",
      sistema: 'S'
    },
    {
      id: 180,
      nome: "Passivo Não Circulante",
      grupo: "passivo",
      classe: "pnc",
      valor: 533808,
      tipo: "S",
      chave: "b1pncTotal",
      sistema: 'S'
    },
    {
      id: 190,
      nome: "Capital Social",
      grupo: "passivo",
      classe: "pl",
      valor: 130000,
      tipo: "A",
      chave: "b1plCapitalSocial",
      sistema: 'S'
    },
    {
      id: 200,
      nome: "Reservas",
      grupo: "passivo",
      classe: "pl",
      valor: 149201,
      tipo: "A",
      chave: "b1plReservas",
      sistema: 'S'
    },
    {
      id: 210,
      nome: "Patrimônio Líquido",
      grupo: "passivo",
      classe: "pl",
      valor: 279201,
      tipo: "S",
      chave: "b1plTotal",
      sistema: 'S'
    },
    {
      id: 220,
      nome: "Passivo Total",
      grupo: "passivo",
      classe: "pTotal",
      valor: 1253835,
      tipo: "S",
      chave: "b1pTotal",
      sistema: 'S'
    }
  ];

  contasB2: Conta[] = [
    {
      id: 10,
      nome: "Caixa e banco",
      grupo: "ativo",
      classe: "ac",
      valor: 105745,
      tipo: "A",
      chave: "b2acCaixaBancos",
      sistema: 'S'
    },
    {
      id: 20,
      nome: "Contas a receber",
      grupo: "ativo",
      classe: "ac",
      valor: 243744,
      tipo: "A",
      chave: "b2acContasAReceber",
      sistema: 'S'
    },
    {
      id: 30,
      nome: "Estoque",
      grupo: "ativo",
      classe: "ac",
      valor: 185880,
      tipo: "A",
      chave: "b2acEstoque",
      sistema: 'S'
    },
    {
      id: 40,
      nome: "Ativo Circulante",
      grupo: "ativo",
      classe: "ac",
      valor: 535369,
      tipo: "S",
      chave: "b2acTotal",
      sistema: 'S'
    },
    {
      id: 50,
      nome: "Realizável a Longo Prazo",
      grupo: "ativo",
      classe: "anc",
      valor: 247847,
      tipo: "A",
      chave: "b2ancRealizavelLongoPrazo",
      sistema: 'S'
    },
    {
      id: 60,
      nome: "Investimento",
      grupo: "ativo",
      classe: "anc",
      valor: 243,
      tipo: "A",
      chave: "b2ancInvestimento",
      sistema: 'S'
    },
    {
      id: 70,
      nome: "Imobilizado",
      grupo: "ativo",
      classe: "anc",
      valor: 433348,
      tipo: "A",
      chave: "b2ancImobilizado",
      sistema: 'S'
    },
    {
      id: 80,
      nome: "Intangível",
      grupo: "ativo",
      classe: "anc",
      valor: 20553,
      tipo: "A",
      chave: "b2ancIntangivel",
      sistema: 'S'
    },
    {
      id: 90,
      nome: "Ativo Não Circulante",
      grupo: "ativo",
      classe: "anc",
      valor: 701991,
      tipo: "S",
      chave: "b2ancTotal",
      sistema: 'S'
    },
    {
      id: 100,
      nome: "Ativo Total",
      grupo: "ativo",
      classe: "aTotal",
      valor: 1237360,
      tipo: "S",
      chave: "b2aTotal",
      sistema: 'S'
    },
    {
      id: 110,
      nome: "Contas a Pagar",
      grupo: "passivo",
      classe: "pc",
      valor: 71235,
      tipo: "A",
      chave: "b2pcContasPagar",
      sistema: 'S'
    },
    {
      id: 120,
      nome: "Fornecedores",
      grupo: "passivo",
      classe: "pc",
      valor: 124451,
      tipo: "A",
      chave: "b2pcFornecedores",
      sistema: 'S'
    },
    {
      id: 130,
      nome: "Empréstimos",
      grupo: "passivo",
      classe: "pc",
      valor: 197004,
      tipo: "A",
      chave: "b2pcEmprestimos",
      sistema: 'S'
    },
    {
      id: 140,
      nome: "Outras Obrigações",
      grupo: "passivo",
      classe: "pc",
      valor: 16465,
      tipo: "A",
      chave: "b2pcOutrasObrigacoes",
      sistema: 'S'
    },
    {
      id: 150,
      nome: "Passivo Circulante",
      grupo: "passivo",
      classe: "pc",
      valor: 409155,
      tipo: "S",
      chave: "b2pcTotal",
      sistema: 'S'
    },
    {
      id: 160,
      nome: "Exigível a Longo Prazo",
      grupo: "passivo",
      classe: "pnc",
      valor: 200089,
      tipo: "A",
      chave: "b2pncExigivelLongoPrazo",
      sistema: 'S'
    },
    {
      id: 170,
      nome: "Empréstimos a Longo prazo",
      grupo: "passivo",
      classe: "pnc",
      valor: 389657,
      tipo: "A",
      chave: "b2pncEmprestimosLongoPrazo",
      sistema: 'S'
    },
    {
      id: 180,
      nome: "Passivo Não Circulante",
      grupo: "passivo",
      classe: "pnc",
      valor: 589746,
      tipo: "S",
      chave: "b2pncTotal",
      sistema: 'S'
    },
    {
      id: 190,
      nome: "Capital Social",
      grupo: "passivo",
      classe: "pl",
      valor: 119565,
      tipo: "A",
      chave: "b2plCapitalSocial",
      sistema: 'S'
    },
    {
      id: 200,
      nome: "Reservas",
      grupo: "passivo",
      classe: "pl",
      valor: 118894,
      tipo: "A",
      chave: "b2plReservas",
      sistema: 'S'
    },
    {
      id: 210,
      nome: "Patrimônio Líquido",
      grupo: "passivo",
      classe: "pl",
      valor: 238459,
      tipo: "S",
      chave: "b2plTotal",
      sistema: 'S'
    },
    {
      id: 220,
      nome: "Passivo Total",
      grupo: "passivo",
      classe: "pTotal",
      valor: 1237360,
      tipo: "S",
      chave: "b2pTotal",
      sistema: 'S'
    }
  ];

  contasDre1: Conta[] = [
    {
      id: 10,
      nome: "(+) Receita Operacional Bruta",
      grupo: "soma",
      classe: "rob",
      valor: 1913500,
      tipo: "A",
      chave: "dre1robReceitaOperacionalBruta",
      sistema: 'S'
    },
    {
      id: 20,
      nome: "(-) Deduções da receita Bruta",
      grupo: "subtrai",
      classe: "dedRob",
      valor: 834944,
      tipo: "A",
      chave: "dre1dedRobDeducaoReceitaBruta",
      sistema: 'S'
    },
    {
      id: 30,
      nome: "(=) Receita Operacional Líquida",
      grupo: "soma",
      classe: "rol",
      valor: 1078556,
      tipo: "S",
      chave: "dre1rolReceitaOperacionalLiquida",
      sistema: 'S'
    },
    {
      id: 40,
      nome: "(-) Custo dos Produtos/Serviços vendidos",
      grupo: "subtrai",
      classe: "cpv",
      valor: 271466,
      tipo: "A",
      chave: "dre1cpvCustoProdutoVendido",
      sistema: 'S'
    },
    {
      id: 50,
      nome: "(=) Resultado Bruto",
      grupo: "subtrai",
      classe: "reb",
      valor: 807090,
      tipo: "S",
      chave: "dre1rbResultadoBruto",
      sistema: 'S'
    },
    {
      id: 60,
      nome: "(-) Despesas Operacionais",
      grupo: "subtrai",
      classe: "dop",
      valor: 664993,
      tipo: "A",
      chave: "dre1dopDespesasOperacionais",
      sistema: 'S'
    },
    {
      id: 70,
      nome: "(-) Despesas Financeiras",
      grupo: "subtrai",
      classe: "def",
      valor: 4033,
      tipo: "A",
      chave: "dre1dfindespesasfinanceiras",
      sistema: 'S'
    },
    {
      id: 80,
      nome: "(+) Receitas Financeiras",
      grupo: "soma",
      classe: "ref",
      valor: 0,
      tipo: "A",
      chave: "dre1rfinReceitasfinanceiras",
      sistema: 'S'
    },
    {
      id: 90,
      nome: "(=) Resultado Antes do IR CSLL",
      grupo: "soma",
      classe: "rir",
      valor: 138064,
      tipo: "S",
      chave: "dre1rirResultadoAntesIr",
      sistema: 'S'
    },
    {
      id: 100,
      nome: "(-) Imposto de renda e Contribuição Social",
      grupo: "subtrai",
      classe: "ircsll",
      valor: 48903,
      tipo: "A",
      chave: "dre1ircsllImpostoDeRenda",
      sistema: 'S'
    },
    {
      id: 110,
      nome: "(-) Participação no Resultado",
      grupo: "subtrai",
      classe: "par",
      valor: 412,
      tipo: "A",
      chave: "dre1parParticipacaoResultado",
      sistema: 'S'
    },
    {
      id: 120,
      nome: "(=) Lucro Líquido do Exercício",
      grupo: "soma",
      classe: "lle",
      valor: 89573,
      tipo: "S",
      chave: "dre1lleLucroLiquidoExercicio",
      sistema: 'S'
    },
  ]

  contasDre2: Conta[] = [
    {
      id: 10,
      nome: "(+) Receita Operacional Bruta",
      grupo: "soma",
      classe: "rob",
      valor: 2157167,
      tipo: "A",
      chave: "dre2robReceitaOperacionalBruta",
      sistema: 'S'
    },
    {
      id: 20,
      nome: "(-) Deduções da receita Bruta",
      grupo: "subtrai",
      classe: "dedRob",
      valor: 961214,
      tipo: "A",
      chave: "dre2dedRobDeducaoReceitaBruta",
      sistema: 'S'
    },
    {
      id: 30,
      nome: "(=) Receita Operacional Líquida",
      grupo: "soma",
      classe: "rol",
      valor: 1195953,
      tipo: "S",
      chave: "dre2rolReceitaOperacionalLiquida",
      sistema: 'S'
    },
    {
      id: 40,
      nome: "(-) Custo dos Produtos/Serviços vendidos",
      grupo: "subtrai",
      classe: "cpv",
      valor: 284280,
      tipo: "A",
      chave: "dre2cpvCustoProdutoVendido",
      sistema: 'S'
    },
    {
      id: 50,
      nome: "(=) Resultado Bruto",
      grupo: "soma",
      classe: "reb",
      valor: 911673,
      tipo: "S",
      chave: "dre2rbResultadoBruto",
      sistema: 'S'
    },
    {
      id: 60,
      nome: "(-) Despesas Operacionais",
      grupo: "subtrai",
      classe: "dop",
      valor: 543695,
      tipo: "A",
      chave: "dre2dopDespesasOperacionais",
      sistema: 'S'
    },
    {
      id: 70,
      nome: "(-) Despesas Financeiras",
      grupo: "subtrai",
      classe: "def",
      valor: 0,
      tipo: "A",
      chave: "dre2dfindespesasfinanceiras",
      sistema: 'S'
    },
    {
      id: 80,
      nome: "(+) Receitas Financeiras",
      grupo: "soma",
      classe: "ref",
      valor: 10944,
      tipo: "A",
      chave: "dre2rfinReceitasfinanceiras",
      sistema: 'S'
    },
    {
      id: 90,
      nome: "(=) Resultado Antes do IR CSLL",
      grupo: "soma",
      classe: "rir",
      valor: 378922,
      tipo: "S",
      chave: "dre2rirResultadoAntesIr",
      sistema: 'S'
    },
    {
      id: 100,
      nome: "(-) Imposto de renda e Contribuição Social",
      grupo: "subtrai",
      classe: "ircsll",
      valor: 108821,
      tipo: "A",
      chave: "dre2ircsllImpostoDeRenda",
      sistema: 'S'
    },
    {
      id: 110,
      nome: "(-) Participação no Resultado",
      grupo: "subtrai",
      classe: "par",
      valor: 0,
      tipo: "A",
      chave: "dre2parParticipacaoResultado",
      sistema: 'S'
    },
    {
      id: 120,
      nome: "(=) Lucro Líquido do Exercício",
      grupo: "soma",
      classe: "lle",
      valor: 270101,
      tipo: "S",
      chave: "dre2lleLucroLiquidoExercicio",
      sistema: 'S'
    },
  ]

  dreLoad: boolean = false
  capitalDeGiroLoad: boolean = false;
  analiseVerticalLoad: boolean = false;
  analiseVerticalDreLoad: boolean = false
  analiseHorizontalLoad: boolean = false;
  analiseHorizontalDreLoad: boolean = false
  situacaoFinanceiraLoad: boolean = false;
  situacaoEconomicaLoad: boolean = false;
  prazosMediosLoad: boolean = false
  ciclosLoad: boolean = false


  constructor() { }

  ngOnInit() {
    this.b1.contas = this.contasB1;
    this.b2.contas = this.contasB2;
    this.dre1.contas = this.contasDre1
    this.dre2.contas = this.contasDre2
    this.ordenarContas()
  }

  loadDre() {
    this.dreLoad = true
  }

  loadCapitalDeGiro() {
    this.capitalDeGiroLoad = true;
  }

  loadAnaliseVertical() {
    this.analiseVerticalLoad = true;
  }
  loadAnaliseVerticalDre() {
    this.analiseVerticalDreLoad = true;
  }

  loadAnaliseHorizontal() {
    this.analiseHorizontalLoad = true;
  }
  loadAnaliseHorizontalDre() {
    this.analiseHorizontalDreLoad = true;
  }

  loadSituacaoFinanceira() {
    this.situacaoFinanceiraLoad = true;
  }

  loadSituacaoEconomica() {
    this.situacaoEconomicaLoad = true;
  }
  loadPrazosMedios() {
    this.prazosMediosLoad = true
  }
  loadCiclos() {
    this.ciclosLoad = true
  }
  destruirComponentes() {
    this.capitalDeGiroLoad = false;
    this.dreLoad = false;
    this.analiseVerticalLoad = false;
    this.analiseVerticalDreLoad = false
    this.analiseHorizontalLoad = false;
    this.analiseHorizontalDreLoad = false
    this.situacaoFinanceiraLoad = false;
    this.situacaoEconomicaLoad = false;
    this.prazosMediosLoad = false
    this.ciclosLoad = false
  }

  ordenarContas() {
    this.b1.contas.sort(function (a, b) {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
    this.b2.contas.sort(function (a, b) {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
    this.dre1.contas.sort(function (a, b) {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
    this.dre2.contas.sort(function (a, b) {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
  }
}
