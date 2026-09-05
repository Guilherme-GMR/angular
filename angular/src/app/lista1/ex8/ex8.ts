import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  standalone: false,
  templateUrl: './ex8.html',
  styleUrl: './ex8.css',
})
export class Ex8 {
  produto: string = '';
  preco: number = 0;
  quantidade: number = 0;
   
  get total() {
    return this.preco * this.quantidade;
  }

}
