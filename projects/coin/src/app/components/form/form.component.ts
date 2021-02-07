import { Component, OnInit } from '@angular/core';

const DOLAR_TO_LIBRA = 0.53;
const DOLAR_TO_EURO = 0.83;
const EURO_TO_DOLAR = 1.2;
const EURO_TO_LIBRA = 0.73;
const LIBRA_TO_DOLAR = 1.37;
const LIBRA_TO_EURO = 1.14;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public quality: number = 2000;
  public own: string = 'USD';
  public want: string = 'EUR';
  public total: number = 0;
  public listConis = [
    { name: 'USD', description: 'US Dolar' },
    { name: 'EUR', description: 'EURO' },
    { name: 'LIB', description: 'LIBRA' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.convert();
  }

  convert(): void {
    if (this.own === this.want) {
      this.total = this.quality;
      return;
    }
    switch (this.own) {
      case 'USD':
        if (this.want === 'EUR') {
          this.total = this.quality * DOLAR_TO_EURO;
        } else if (this.want === 'LIB') {
          this.total = this.quality * DOLAR_TO_LIBRA;
        }
        break;
      case 'LIB':
        if (this.want === 'EUR') {
          this.total = this.quality * LIBRA_TO_EURO;
        } else if (this.want === 'USD') {
          this.total = this.quality * LIBRA_TO_DOLAR;
        }
        break;
      case 'EUR':
        if (this.want === 'LIB') {
          this.total = this.quality * EURO_TO_LIBRA;
        } else if (this.want === 'USD') {
          this.total = this.quality * EURO_TO_DOLAR;
        }
        break;
    }
  }
}
