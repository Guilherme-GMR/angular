import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista2RoutingModule } from './lista2-routing-module';
import { Ex2 } from './ex2/ex2';
import { Ex1 } from './ex1/ex1';
import { Ex3 } from './ex3/ex3';

@NgModule({
  declarations: [Ex2, Ex1, Ex3],
  imports: [CommonModule, Lista2RoutingModule],
})
export class Lista2Module {}
