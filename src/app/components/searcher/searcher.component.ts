import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit{
  form: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      city: new FormControl("Riga", [Validators.required])
    });
  }

  onlyEnglishLetters(control: FormControl) {
    let reg = /^[a-zA-Z]*$/;
    if(control.value != null && reg.test(control.value)) {
      return null;
    }
    return {onlyEnglishLetters: true};
  }

  sumbit(): void {

    console.log(this.form);
  }
}
