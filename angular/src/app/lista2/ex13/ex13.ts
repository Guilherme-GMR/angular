import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-ex13',
  standalone: false,
  templateUrl: './ex13.html',
  styleUrl: './ex13.css',
})
export class Ex13 {

  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Fazer atividade de Angular',
      responsavel: 'Guilherme',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 2,
      titulo: 'Estudar Java',
      responsavel: 'João',
      prioridade: 'media',
      concluida: true
    },
    {
      id: 3,
      titulo: 'Fazer trabalho de banco de dados',
      responsavel: 'Maria',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Organizar projeto',
      responsavel: 'Pedro',
      prioridade: 'baixa',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Estudar para a prova',
      responsavel: 'Ana',
      prioridade: 'media',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Entregar trabalho',
      responsavel: 'Guilherme',
      prioridade: 'alta',
      concluida: true
    }
  ];

  alterarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }
}