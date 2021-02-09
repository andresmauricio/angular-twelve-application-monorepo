import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'Masculino';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any): void{
    console.log(event);
    this.altura = event.target.value;
  }

  masculino(): void {
    this.sexo = 'Masculino';
  }

  femenino(): void {
    this.sexo = 'Femenino';
  }

  calcular(): void {
    const BMI = this.peso / Math.pow(this.altura / 100, 2);
    this.router.navigate(['result', BMI.toFixed(1)]);
  }

}
