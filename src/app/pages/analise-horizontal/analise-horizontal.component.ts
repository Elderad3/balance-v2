import { Balanco } from './../../shared/models/balanco.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analise-horizontal',
  templateUrl: './analise-horizontal.component.html'
})
export class AnaliseHorizontalComponent implements OnInit {

  @Input() b1: Balanco
  @Input() b2: Balanco
  constructor() { }

  ngOnInit() {
    console.log("O componente ANÁLISE HORIZONTAL foi carregado")
  }

}
