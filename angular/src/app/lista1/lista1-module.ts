import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista1RoutingModule } from './lista1-routing-module';
import { Ex1 } from './ex1/ex1';

@NgModule({
  declarations: [Ex1],
  imports: [CommonModule, Lista1RoutingModule],
})
export class Lista1Module {}
