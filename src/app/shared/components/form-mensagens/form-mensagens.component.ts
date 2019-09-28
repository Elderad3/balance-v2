import { FormControl, FormControlName } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-mensagens',
  templateUrl: './form-mensagens.component.html'
})
export class FormMensagensComponent {

  @Input() label: string
  @Input() errorMessage: string

  @Input() control: FormControlName;

  hasError(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched)
  }


}
