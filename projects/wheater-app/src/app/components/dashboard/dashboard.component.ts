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
  constructor(private wheaterMapService: WheaterMapService) {}

  ngOnInit(): void {
    this.wheaterMapService.getWheaterInfo('bogota').subscribe((data) => {
      this.result = data;   
      console.log(data);
         
    });
  }
}
