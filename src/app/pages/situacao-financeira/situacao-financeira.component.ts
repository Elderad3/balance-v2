import { Balanco2 } from "./../../shared/models/balanco2.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-situacao-financeira",
  templateUrl: "./situacao-financeira.component.html"
})
export class SituacaoFinanceiraComponent implements OnInit {
  @Input() b1: Balanco2;
  @Input() b2: Balanco2;

  indicesLiquidezLoad: boolean = false
  grauDeSolvenciaLoad: boolean = false
  indicesEstruturaLoad: boolean = false

  constructor() { }

  ngOnInit() {
    this.indicesLiquidezLoad = true

  }

  loadIndicesLiquidez() {
    this.indicesLiquidezLoad = true
    this.grauDeSolvenciaLoad = false
    this.indicesEstruturaLoad = false
  }
  loadGrauDeSolvencia() {
    this.grauDeSolvenciaLoad = true
    this.indicesLiquidezLoad = false
    this.indicesEstruturaLoad = false
  }
  loadIndicesestrutura() {
    this.indicesEstruturaLoad = true
    this.grauDeSolvenciaLoad = false
    this.indicesLiquidezLoad = false
  }
  destruirComponentes() {
    this.indicesLiquidezLoad = false
    this.grauDeSolvenciaLoad = false
    this.indicesEstruturaLoad = true
  }


}
