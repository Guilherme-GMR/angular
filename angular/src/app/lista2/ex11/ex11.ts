import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.css',
})
export class Ex11 {

  somenteDisponiveis: boolean = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 100, quantidade: 5, promocao: true },
    { id: 2, nome: 'Mouse', preco: 50, quantidade: 10, promocao: false },
    { id: 3, nome: 'Monitor', preco: 800, quantidade: 3, promocao: true },
    { id: 4, nome: 'Headset', preco: 150, quantidade: 4, promocao: false },
    { id: 5, nome: 'Webcam', preco: 200, quantidade: 0, promocao: true }
  ];

  alterarFiltro(): void {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }
}