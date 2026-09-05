import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.css',
})
export class Ex6 {
 curtidas = 0;

  curtirmais(){
   this.curtidas++;
}
  curtirmenos(){
    this.curtidas--;
  }
}
