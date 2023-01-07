import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DayManipulatorService } from 'src/app/services/day-manipulator/day-manipulator.service';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private mainService: DayManipulatorService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      city: new FormControl('Riga', [Validators.required]),
    });
  }

  sumbit(): void {
    if (!this.form.valid) {
      alertifyjs.error('City is empty');
      return;
    }
    this.mainService.loadForecast(this.form.controls['city'].value);
  }
}
