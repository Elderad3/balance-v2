import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  data: any
  @Input() nome1: string;
  @Input() nome2: string;
  @Input() nome3: string;
  @Input() nome4: string;
  @Input() valor1: number;
  @Input() valor2: number;
  @Input() valor3: number
  @Input() valor4: number
  constructor() { }

  ngOnInit() {
    let labels = [this.nome1, this.nome2, this.nome3, this.nome4].filter(label => label !== undefined)
    this.data = {
      labels: labels,
      datasets: [
        {
          data: [this.valor1, this.valor2, this.valor3, this.valor4],
          backgroundColor: this.adicionarCores(),
          hoverBackgroundColor: this.adicionarCores()
        }]
    }
  }

  adicionarCores() {
    let cores: string[] = []
    if (this.nome1 === 'Ativo Total') {
      cores.push('#1d2d50')
    }
    if (this.nome1 === 'Ativo Circulante') {
      cores.push('#3c8dbc')
    }
    if (this.nome1 === 'Ativo não Circulante') {
      cores.push('#1E88E5')
    }
    if (this.nome2 === 'Realizável a Longo Prazo') {
      cores.push('#4d80e4')
    }
    if (this.nome2 === 'Estoque') {
      cores.push('#293a80')
    }
    if (this.nome2 === 'Passivo Circulante') {
      cores.push('#ff2800')
    }
    if (this.nome3 === 'Passivo Circulante') {
      cores.push('#ff2800')
    }
    if (this.nome2 === 'Passivo não Circulante') {
      cores.push('#dc2f02')
    }
    if (this.nome3 === 'Passivo não Circulante') {
      cores.push('#dc2f02')
    }
    if (this.nome2 === 'Passivo não Circulante') {
      cores.push('#dc2f02')
    }
    if (this.nome4 === 'Passivo não Circulante') {
      cores.push('#dc2f02')
    }
    if (this.nome2 === 'Patrimônio Líquido') {
      cores.push('#fca311')
    }
    if (this.nome3 === 'Patrimônio Líquido') {
      cores.push('#fca311')
    }

    return cores
  }
}
