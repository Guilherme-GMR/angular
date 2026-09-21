import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.css',
})
export class Ex10 {

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 100, quantidade: 5, promocao: true },
    { id: 2, nome: 'Mouse', preco: 50, quantidade: 10, promocao: false },
    { id: 3, nome: 'Monitor', preco: 800, quantidade: 3, promocao: true },
    { id: 4, nome: 'Headset', preco: 150, quantidade: 4, promocao: false },
    { id: 5, nome: 'Webcam', preco: 200, quantidade: 2, promocao: true }
  ];

  alterarPromocao(produto: Produto): void {
    produto.promocao = !produto.promocao;
  }

}