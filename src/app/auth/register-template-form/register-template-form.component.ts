import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register-template-form',
  templateUrl: './register-template-form.component.html',
  styleUrls: ['./register-template-form.component.css']
})
export class RegisterTemplateFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(value, valid) {
    console.log(value, valid);
  }

}
