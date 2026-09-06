import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.css',
})
export class Ex11 {
   produto: string = '';
  preco: number = 0;
   quantidade = 1;

  mais(){
   this.quantidade++;
}
  menos(){
    if(this.quantidade > 0){
      this.quantidade--;
  }
  
}

  resultado: boolean= false;

  entrar() {
    this.resultado = true;
  }
   
  get total() {
    return this.preco * this.quantidade;
  }
}
