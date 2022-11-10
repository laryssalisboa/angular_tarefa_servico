import { Injectable } from '@angular/core';
class Task {
  title: string;
  dia: string;
  horario: string;
}
@Injectable()
export class DisiciplinasService {
  private tasks: Task[] = [
    { title: 'Dispositivos Móveis', dia: 'Segunda', horario: '19:00' },
    { title: 'Inglês IV', dia: 'Terça', horario: '19:00' },
    { title: 'Negócios e Marketing', dia: 'Terça', horario: '21:00' },
    { title: 'Negócios e Marketing', dia: 'Quarta', horario: '19:00' },
    { title: 'Servidores II', dia: 'Quinta', horario: '19:00' },
    { title: 'Tópicos Especiais II', dia: 'Sexta', horario: '19:00' },
    { title: 'Prototipagem e Testes', dia: 'Sábado', horario: '08:00' },
    { title: 'TCC I', dia: 'Sábado', horario: '11:30' },
  ];

  constructor() {}

  add(title: string, dia: string, horario: string) {
    this.tasks.push({ title, dia, horario });
  }
  remove(index: number) {
    this.tasks.splice(index, 1);
  }
  getList() {
    return this.tasks;
  }
}
