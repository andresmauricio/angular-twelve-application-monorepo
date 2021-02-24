import { Component, OnInit } from '@angular/core';
import { IWheaterMap } from '../../models/IWheater';
import { WheaterMapService } from '../../services/wheater-map.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public result: IWheaterMap;
  public error = false;
  public city: string;
  constructor(private wheaterMapService: WheaterMapService) {}

  ngOnInit(): void {}

  serachCityStatus() {
    this.wheaterMapService.getWheaterInfo(this.city).subscribe(
      (data) => {
        this.result = data;
        this.error = false;
      },
      (error) => {
        this.error = true;
        this.result = null;
      }
    );
  }
}
