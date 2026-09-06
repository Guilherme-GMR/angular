import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.css',
})
export class Ex10 {

  usuario: string = '';
  senha: string = '';

  resultado: boolean= false;

  entrar() {
    this.resultado = true;
  }
}
