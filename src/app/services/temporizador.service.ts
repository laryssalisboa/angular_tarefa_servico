import { Injectable } from '@angular/core';

@Injectable()
export class TemporizadorService {
  private timer: any;
  public counter: number = 0;
  constructor() {
    this.timer = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  getCounter() {
    return this.counter;
  }

  pauseTimer() {
    clearInterval(this.timer);
  }
}
