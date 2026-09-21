import { Component } from '@angular/core';

interface Produto {
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.css',
})
export class Ex12 {

  nome: string = '';
  quantidade: number = 0;
  mensagem: string = '';

  produtos: Produto[] = [];

  cadastrar(): void {
    if (this.nome.trim() === '') {
      this.mensagem = 'Digite o nome do produto.';
      return;
    }

    if (this.quantidade < 0) {
      this.mensagem = 'A quantidade não pode ser menor que zero.';
      return;
    }

    this.produtos.push({
      nome: this.nome,
      quantidade: this.quantidade
    });

    this.nome = '';
    this.quantidade = 0;
    this.mensagem = '';
  }

  excluir(index: number): void {
    this.produtos.splice(index, 1);
  }
}