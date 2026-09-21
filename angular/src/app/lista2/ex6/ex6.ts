import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.css',
})
export class Ex6 {

  nomes: string[] = [
    'Guilherme',
    'João',
    'Maria',
    'Pedro',
    'Ana'
  ];

  removerUltimo(): void {
    this.nomes.pop();
  }

  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [
      'Guilherme',
      'João',
      'Maria',
      'Pedro',
      'Ana'
    ];
  }

}