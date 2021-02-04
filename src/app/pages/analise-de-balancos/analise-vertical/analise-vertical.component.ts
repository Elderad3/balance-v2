
import { HttpClient } from '@angular/common/http';
import { AnaliseVerticalService } from './analise-vertical.service';
import { Balanco2 } from './../../../shared/models/balanco2.model';
import { AnaliseVertical } from './../../../shared/models/analise-vertical.model';
import { Component, OnInit, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-analise-vertical',
  templateUrl: './analise-vertical.component.html'
})
export class AnaliseVerticalComponent implements OnInit {

  @Input() b1: Balanco2
  @Input() b2: Balanco2
  analises: AnaliseVertical[] = []
  constructor(private analiseVerticalService: AnaliseVerticalService, private http: HttpClient) { }

  ngOnInit() {
    this.analises = this.analiseVerticalService.calcularAnaliseVertical(this.b1, this.b2)
  }
}
