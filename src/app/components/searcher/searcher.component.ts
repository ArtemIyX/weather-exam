import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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

  sumbit(): void {
    
  }
}
