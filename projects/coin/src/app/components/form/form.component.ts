import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public quality: number;
  public own: string;
  public want: string;

  constructor() { }

  ngOnInit(): void {
  }

}
