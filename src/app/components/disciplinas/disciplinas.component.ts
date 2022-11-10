import { Component, OnInit } from '@angular/core';
import { DisiciplinasService } from '../../services/disiciplinas.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css'],
})
export class DisciplinasComponent implements OnInit {
  constructor(public tasks: DisiciplinasService) {}

  ngOnInit() {}
}
