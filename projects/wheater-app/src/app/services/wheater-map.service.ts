import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WheaterMapService {
  private readonly API = environment.api;
  private readonly KEY = `&appid=${environment.key}`;

  constructor(private http: HttpClient) { }

  getWheaterInfo(city: string) {
    const url = `${this.API}?q=${city}${this.KEY}`;
    return this.http.get(url);
  }
}
