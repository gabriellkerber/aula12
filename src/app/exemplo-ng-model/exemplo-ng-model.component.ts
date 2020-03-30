import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-model',
  templateUrl: './exemplo-ng-model.component.html',
  styleUrls: ['./exemplo-ng-model.component.scss']
})
export class ExemploNgModelComponent implements OnInit {

  nome: string;
  jsonDados: string;

  constructor() { }

  ngOnInit(): void {
  }

  limpar() {
    this.nome = null;
    this.jsonDados = null;
  }

  enviar() {
    const dados = { nome: this.nome };
    this.jsonDados = JSON.stringify(dados);
  }
}
