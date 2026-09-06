import { Component } from '@angular/core';

@Component({
  selector: 'app-exfinal',
  standalone: false,
  templateUrl: './exfinal.html',
  styleUrl: './exfinal.css',
})
export class Exfinal {
  aluno: string = '';
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
   
}
