import { AnaliseVerticalService } from './analise-vertical.service';
import { Conta } from './../../shared/models/conta.model';
import { Balanco2 } from './../../shared/models/balanco2.model';
import { AnaliseVertical } from './../../shared/models/analise-vertical.model';
import { Balanco } from './../../shared/models/balanco.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analise-vertical',
  templateUrl: './analise-vertical.component.html'
})
export class AnaliseVerticalComponent implements OnInit {

  @Input() b1: Balanco2
  @Input() b2: Balanco2

  analises: AnaliseVertical[] = []

  constructor(private analiseVerticalService: AnaliseVerticalService) { }

  ngOnInit() {
    this.analises = this.analiseVerticalService.calcularAnaliseVertical(this.b1, this.b2)
  }
}
