import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public quality: number = 2000;
  public own: string = 'USD';
  public want: string = 'EUR';
  public total: number = 0;
  public listConis = [
    { name: 'USD', description: 'US Dolar'},
    { name: 'EUR', description: 'EURO'},
    { name: 'LIB', description: 'LIBRA'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
