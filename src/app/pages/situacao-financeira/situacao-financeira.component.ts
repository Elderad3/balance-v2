import { Balanco } from './../../shared/models/balanco.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-situacao-financeira',
  templateUrl: './situacao-financeira.component.html'
})
export class SituacaoFinanceiraComponent implements OnInit {

  @Input() b1: Balanco
  @Input() b2: Balanco

  constructor() { }

  ngOnInit() {
    console.log("Componente SITUAÇÃO FINANCEIRA foi carregado")
  }


}
