import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  age = 25;
  weight = 60;
  height = 170;
  sex = 'Masculino';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any): void{
    this.height = event.target.value;
  }

  masculino(): void {
    this.sex = 'Masculino';
  }

  femenino(): void {
    this.sex = 'Femenino';
  }

  calcular(): void {
    const BMI = this.weight / Math.pow(this.height / 100, 2);
    this.router.navigate(['result', BMI.toFixed(1)]);
  }

}
