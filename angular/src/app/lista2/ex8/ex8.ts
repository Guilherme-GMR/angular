import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex8',
  standalone: false,
  templateUrl: './ex8.html',
  styleUrl: './ex8.css',
})
export class Ex8 {

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 100, quantidade: 5 },
    { id: 2, nome: 'Mouse', preco: 50, quantidade: 10 },
    { id: 3, nome: 'Monitor', preco: 800, quantidade: 3 },
    { id: 4, nome: 'Headset', preco: 150, quantidade: 4 },
    { id: 5, nome: 'Webcam', preco: 200, quantidade: 2 }
  ];

}