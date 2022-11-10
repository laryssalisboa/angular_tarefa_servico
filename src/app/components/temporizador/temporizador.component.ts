import { Component, OnInit } from '@angular/core';
import { TemporizadorService } from '../../services/temporizador.service';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css'],
})
export class TemporizadorComponent implements OnInit {
  constructor(public timer: TemporizadorService) {}

  ngOnInit() {}
}
