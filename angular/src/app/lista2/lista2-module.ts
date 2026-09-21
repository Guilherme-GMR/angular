import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista2RoutingModule } from './lista2-routing-module';
import { Ex2 } from './ex2/ex2';
import { Ex1 } from './ex1/ex1';
import { Ex3 } from './ex3/ex3';
import { Ex4 } from './ex4/ex4';
import { Ex5 } from './ex5/ex5';
import { Ex6 } from './ex6/ex6';
import { Ex7 } from './ex7/ex7';
import { Ex8 } from './ex8/ex8';

@NgModule({
  declarations: [Ex2, Ex1, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8],
  imports: [CommonModule, Lista2RoutingModule],
})
export class Lista2Module {}
