import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {equalValidator, phoneAsyncValidator} from '../../validators/validators';

@Component({
  selector: 'app-register-reactive-form',
  templateUrl: './register-reactive-form.component.html',
  styleUrls: ['./register-reactive-form.component.css']
})
export class RegisterReactiveFormComponent implements OnInit {

  // formModel: FormGroup;
  formModel = new FormGroup({
    username: new FormControl(),
    phone: new FormControl(),
    passwordsGroup: new FormGroup({
      password: new FormControl(),
      passwordConfirm: new FormControl()
    }),
    emails: new FormArray([
      new FormControl('a@a.com'),
      new FormControl('b@b.com'),
    ])
  });

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [this.phoneValidator]],
      passwordsGroup: fb.group({
        password: ['', [Validators.minLength(6)]],
        passwordConfirm: ['']
      }, {validator: equalValidator}),
      emails: new FormArray([
        new FormControl('a@a.com'),
        new FormControl('b@b.com')
      ])
    });
    console.log(this.formModel.get('emails'));
  }

  phoneValidator(control: FormControl): any {
    const myreg = /^13[0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|14[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$/;
    const valid = myreg.test(control.value);
    console.log('phone validate result:' + valid);
    return valid ? null : {phoneError: {errorMsg: 'phone number error'}};
  }

  addEmail() {
    const emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl('c@c.com'));
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel);
  }
}
