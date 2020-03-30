import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exemplo-form-control',
  templateUrl: './exemplo-form-control.component.html',
  styleUrls: ['./exemplo-form-control.component.scss']
})
export class ExemploFormControlComponent implements OnInit {

  nome = new FormControl(null, [Validators.required, Validators.maxLength(16)]);
  sobrenome = new FormControl(null, [Validators.required, Validators.maxLength(32)]);
  jsonDados: string;

  constructor() { }

  ngOnInit(): void {
  }

  limpar() {
    this.nome.setValue(null);
    this.sobrenome.setValue(null);
    this.jsonDados = null;
  }

  enviar() {

    this.nome.markAsTouched();
    this.sobrenome.markAsTouched();

    if (this.nome.invalid || this.sobrenome.invalid){
      return;
    }

    const dados = { nome: this.nome.value };
    this.jsonDados = JSON.stringify(dados);
  }

}
