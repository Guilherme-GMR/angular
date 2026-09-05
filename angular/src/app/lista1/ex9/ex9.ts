import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.css',
})
export class Ex9 {
  produto: string = '';
  
  estoque = 0;

  mais(){
   this.estoque++;
}
  menos(){
    if(this.estoque > 0){
      this.estoque--;
  }
  
}
}
