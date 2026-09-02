import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista1RoutingModule } from './lista1-routing-module';
import { Ex1 } from './ex1/ex1';
import { Ex2 } from './ex2/ex2';

@NgModule({
  declarations: [Ex1, Ex2],
  imports: [CommonModule, Lista1RoutingModule],
})
export class Lista1Module {}
