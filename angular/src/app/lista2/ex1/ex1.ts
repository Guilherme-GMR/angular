import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  standalone: false,
  templateUrl: './ex1.html',
  styleUrl: './ex1.css',
})
export class Ex1 {

  visivel: boolean = false

  alterarmensagem(): void{
    this.visivel = !this.visivel;
  }
}
