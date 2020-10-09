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
    setTimeout(() => {
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
    }, 500);

  }
  adicionarCores() {
    let cores: string[] = []
    this.nome1 === "Lucro Líquido" ? cores.push('#2a9d8f') : undefined
    this.nome1 === "Ativo Total" ? cores.push('#1d2d50') : undefined
    this.nome2 === "Ativo Total" ? cores.push('#1d2d50') : undefined
    this.nome1 === 'Ativo Circulante' ? cores.push('#3c8dbc') : undefined
    this.nome1 === 'Ativo não Circulante' ? cores.push('#1E88E5') : undefined
    this.nome2 === 'Realizável a Longo Prazo' ? cores.push('#4d80e4') : undefined
    this.nome2 === 'Estoque' ? cores.push('#293a80') : undefined
    this.nome1 === 'Investimento' ? cores.push('#0077b6') : undefined
    this.nome2 === 'Imobilizado' ? cores.push('#2a9d8f') : undefined
    this.nome3 === 'Intangível' ? cores.push('#48cae4') : undefined
    this.nome1 === 'Passivo Circulante' ? cores.push('#ff2800') : undefined
    this.nome2 === 'Passivo Circulante' ? cores.push('#ff2800') : undefined
    this.nome3 === 'Passivo Circulante' ? cores.push('#ff2800') : undefined
    this.nome4 === 'Passivo Circulante' ? cores.push('#ff2800') : undefined
    this.nome1 === 'Passivo não Circulante' ? cores.push('#9d0208') : undefined
    this.nome2 === 'Passivo não Circulante' ? cores.push('#9d0208') : undefined
    this.nome3 === 'Passivo não Circulante' ? cores.push('#9d0208') : undefined
    this.nome4 === 'Passivo não Circulante' ? cores.push('#9d0208') : undefined
    this.nome1 === 'Empréstimos' ? cores.push('#370617') : undefined
    this.nome1 === 'Patrimônio Líquido' ? cores.push('#fca311') : undefined
    this.nome2 === 'Patrimônio Líquido' ? cores.push('#fca311') : undefined
    this.nome3 === 'Patrimônio Líquido' ? cores.push('#fca311') : undefined
    this.nome4 === 'Patrimônio Líquido' ? cores.push('#fca311') : undefined
    this.nome1 === 'Vendas Líquidas' ? cores.push('#00a65a') : undefined
    this.nome2 === 'Vendas Líquidas' ? cores.push('#00a65a') : undefined

    return cores
  }

}
