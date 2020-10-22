import { AnaliseHorizontalDreService } from './analise-horizontal-dre.service';
import { Dre } from './../../../shared/models/dre.model';
import { AnaliseHorizontal } from "./../../../shared/models/analise-horizontal.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-analise-horizontal-dre",
  templateUrl: "./analise-horizontal-dre.component.html"
})
export class AnaliseHorizontalDreComponent implements OnInit {
  @Input() dre1: Dre;
  @Input() dre2: Dre;
  analises: AnaliseHorizontal[] = [];

  constructor(private analiseHorizontalDreService: AnaliseHorizontalDreService) { }

  ngOnInit() {
    this.analises = this.analiseHorizontalDreService.calcularAnaliseHorizontal(this.dre1, this.dre2)
  }
}
