import { Component, OnInit } from '@angular/core';

const constains = {
  buttonShortcut: 'Shorcut',
  buttonReset: 'Reset',
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  buttonLabel = constains.buttonShortcut;
  urlOrigin = '';
  urlResult = '';
  constructor() { }

  ngOnInit(): void {
  }

  transform() {
    console.log('transform');
    
  }

}
