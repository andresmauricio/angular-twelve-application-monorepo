import { Component, OnInit } from '@angular/core';
import { WheaterMapService } from '../../services/wheater-map.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private wheaterMapService: WheaterMapService) {}

  ngOnInit(): void {
    this.wheaterMapService.getWheaterInfo('bogota')
      .subscribe(data => console.log(data));
  }
}
