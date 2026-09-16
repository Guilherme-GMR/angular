import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista2RoutingModule } from './lista2-routing-module';
import { Ex2 } from './ex2/ex2';
import { Ex1 } from './ex1/ex1';

@NgModule({
  declarations: [Ex2, Ex1],
  imports: [CommonModule, Lista2RoutingModule],
})
export class Lista2Module {}
