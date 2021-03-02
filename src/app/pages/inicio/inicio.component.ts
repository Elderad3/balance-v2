import { Meta } from '@angular/platform-browser';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html"
})
export class InicioComponent implements OnInit {
  data: any;
  constructor(private metaTagService: Meta) {
  }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'description', content: 'Ferramentas Gratuitas para Contadores e Gestores.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Elder Damascena' }
    ]);
  }
}
