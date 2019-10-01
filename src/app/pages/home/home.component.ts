import { Balanco } from './../../shared/models/balanco.model';
import { BalancoService } from './../balanco/balanco.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  b1: Balanco  = new Balanco()
  b2: Balanco  = new Balanco()

  capitalDeGiroLoad: boolean = false
  analiseVerticalLoad: boolean = false
  analiseHorizontalLoad:  boolean = false

  constructor() { }

  ngOnInit() {

    console.log("balanço do componente pai: "+this.b1.aTotal)
  }

  loadCapitalDeGiro(){
    this.capitalDeGiroLoad = true
  }

  loadAnaliseVertical(){
    this.analiseVerticalLoad = true
  }

  loadAnaliseHorizontal(){
    this.analiseHorizontalLoad = true
  }
 

}
