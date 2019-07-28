import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  firstNameValue = '';
  lastNameValue = '';

  constructor() { }

  ngOnInit() {
  }

  onKeyFirstName(event: KeyboardEvent) { // with type info
    this.firstNameValue = (<HTMLInputElement>event.target).value;
    console.log(this.firstNameValue);
  }

  onKeyLastName(event: KeyboardEvent) { // with type info
    this.lastNameValue = (<HTMLInputElement>event.target).value;
    console.log(this.lastNameValue);
  }
}