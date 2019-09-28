import { Balanco } from './../../shared/models/balanco.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analise-vertical',
  templateUrl: './analise-vertical.component.html'
})
export class AnaliseVerticalComponent implements OnInit {

  @Input() b1: Balanco
  @Input() b2: Balanco

  constructor() { }

  ngOnInit() {
  console.log("Componente ANÁLISE VERTICAL foi carregado")
  }

}
