import { Dre } from './../../../shared/models/dre.model';
import { Balanco2 } from './../../../shared/models/balanco2.model';
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-situacao-economica",
  templateUrl: "./situacao-economica.component.html"
})
export class SituacaoEconomicaComponent implements OnInit {

  @Input() b1: Balanco2;
  @Input() b2: Balanco2;
  @Input() dre1: Dre
  @Input() dre2: Dre
  constructor() { }
  ngOnInit() {
  }
}
