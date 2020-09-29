import { AnaliseVerticalDreService } from './analise-vertical-dre.service';
import { Dre } from './../../shared/models/dre.model';
import { AnaliseVertical } from './../../shared/models/analise-vertical.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analise-vertical-dre',
  templateUrl: './analise-vertical-dre.component.html'
})
export class AnaliseVerticalDreComponent implements OnInit {

  @Input() dre1: Dre
  @Input() dre2: Dre
  analises: AnaliseVertical[] = []

  constructor(private analiseVerticalDreService: AnaliseVerticalDreService) { }

  ngOnInit() {
    this.analises = this.analiseVerticalDreService.calcularAnaliseVerticalDre(this.dre1, this.dre2)
  }



}
