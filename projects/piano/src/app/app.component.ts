import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public conteinerKeys: any[];

  constructor() {
    this.conteinerKeys = new Array(7);    
  }

  sound(numberSound: number): void {
    const audio: HTMLAudioElement = new Audio();
    audio.src = `../assets/sounds/note${numberSound}.wav`;
    audio.load();
    audio.play();
  }
}
