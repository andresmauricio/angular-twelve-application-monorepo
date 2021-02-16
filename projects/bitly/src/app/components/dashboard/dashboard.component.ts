import { Component, OnInit } from '@angular/core';
import { BitlyService } from '../../services/bitly.service';

const constains = {
  buttonShortcut: 'Shorcut',
  buttonReset: 'Reset',
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  buttonLabel = constains.buttonShortcut;
  urlOrigin = '';
  urlResult = '';
  constructor(private bitlyService: BitlyService) {}

  ngOnInit(): void {}

  transform() {
    if (this.buttonLabel === constains.buttonShortcut) {
      this.buttonLabel = constains.buttonReset;
      this.bitlyService
        .transformData(this.urlOrigin)
        .subscribe((response) => console.log(response));
    } else {
      this.buttonLabel = constains.buttonShortcut;
      this.urlOrigin = '';
      this.urlResult = '';
    }
  }
}
