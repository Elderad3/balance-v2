import { Balanco } from './../../shared/models/balanco.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capital-giro',
  templateUrl: './capital-giro.component.html'
})
export class CapitalGiroComponent implements OnInit {

  @Input() b1: Balanco
  @Input() b2: Balanco

  constructor() { }

  ngOnInit() {
    console.log("Componente CAPITAL DE GIRO foi carregado")
  }

}
