import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BitlyService {
  private readonly URL_BITLY = 'https://api-ssl.bitly.com/v4/shorten';
  private token = '4631df1b7e153496985a688424f137e5970ce69c';

  constructor(private http: HttpClient) {}

  transformData(url: string) {
    const header = new HttpHeaders({ Autorization: 'Bearer ' + this.token });
    const payload = { long_url: url };
    return this.http.post(this.URL_BITLY, payload, { headers: header });
  }
}
