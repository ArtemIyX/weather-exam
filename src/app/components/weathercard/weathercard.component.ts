import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/responses/weather';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.css']
})
export class WeathercardComponent implements OnInit {

  @Input() date: string | undefined;

  constructor() {

  }
  ngOnInit(): void {
    if(typeof this.date === undefined){
      console.error("Date of weatherCard component is undefined");
      return;
    }
    let actualDate = new Date(this.date!);
    console.log(actualDate.getDay());
  }
}
