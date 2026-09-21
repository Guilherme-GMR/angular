import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  standalone: false,
  templateUrl: './ex4.html',
  styleUrl: './ex4.css',
})
export class Ex4 {

  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionar(): void {
    this.quantidadeEstoque++;
  }

  remover(): void {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }

}