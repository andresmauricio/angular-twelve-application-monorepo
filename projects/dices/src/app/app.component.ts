import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private BASE_ROUTE_IMAGE = '../assets/img/dice'
  diceLeft = '../assets/img/dice1.png';
  diceRight = '../assets/img/dice6.png';
  numberDiceLeft = 1;
  numberDiceRight = 6;

  pushDices() {
    this.numberDiceLeft = Math.round(Math.random() * 5) + 1; 
    this.numberDiceRight = Math.round(Math.random() * 5) + 1; 
    this.diceLeft = `${this.BASE_ROUTE_IMAGE}${this.numberDiceLeft}.png`;  
    this.diceRight = `${this.BASE_ROUTE_IMAGE}${this.numberDiceRight}.png`;   
  }
}
