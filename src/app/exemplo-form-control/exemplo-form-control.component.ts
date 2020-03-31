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
  cidade = new FormControl(null);
  estado = new FormControl(null, [Validators.required]);
  profissao = new FormControl(null, [Validators.required]);
  jsonDados: string;

  constructor() { }

  ngOnInit(): void {
  }

  limpar() {
    this.nome.setValue(null);
    this.sobrenome.setValue(null);
    this.cidade.setValue(null);
    this.estado.setValue(null);
    this.profissao.setValue(null);
    this.jsonDados = null;
  }

  enviar() {

    this.nome.markAsTouched();
    this.sobrenome.markAsTouched();
    this.cidade.markAsTouched();
    this.estado.markAsTouched();
    this.profissao.markAsTouched();

    if (this.nome.invalid || this.sobrenome.invalid || this.estado.invalid || this.cidade.invalid || this.profissao.invalid){
      return;
    }

    const dados = { nome: this.nome.value, sobrenome: this.sobrenome.value , cidade: this.cidade.value, estado: this.estado.value, profissao: this.profissao.value};
    this.jsonDados = JSON.stringify(dados);
  }

}
