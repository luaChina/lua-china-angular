import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export function equalValidator(group: FormGroup): any {
  const password = group.get('password');
  const passwordConfirm = group.get('passwordConfirm');
  const valid: boolean = (password.value === passwordConfirm.value);
  console.log('password confirm:' + valid, ' password:' + password.value, ' password confirm:' + passwordConfirm.value);
  return valid ? null : {confirmError: true};
}

export function phoneAsyncValidator(control: FormControl): any {
  const myreg = /^13[0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|14[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$/;
  const valid = myreg.test(control.value);
  console.log('phone async validate result:' + valid, 'pending:' + control.pending);
  return Observable.of(valid ? null : {phoneError: {errorMsg: 'phone number error'}}).delay(5000);
}
