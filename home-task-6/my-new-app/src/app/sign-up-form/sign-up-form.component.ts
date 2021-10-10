import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  passwordApproveValidator: ValidatorFn = (control: AbstractControl):
    ValidationErrors | null => {

    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value !== confirmPassword.value ? {notIdentified: true} : null;
  };

  show: boolean;
  signedUp: boolean;
  formIsNotFilled: boolean;

  signUpForm = new FormGroup({
    nameGroup: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    }),
    contactGroup: new FormGroup({
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+(?:[0-9]?){4,16}[0-9]$/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])
    }),
    secureGroup: new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    }, {validators: this.passwordApproveValidator})
  });

  constructor() {
    this.show = false;
    this.signedUp = false;
    this.formIsNotFilled = false;
  }

  get nameGroup() {
    return this.signUpForm.controls.nameGroup as FormGroup;
  }

  get contactGroup() {
    return this.signUpForm.controls.contactGroup as FormGroup;
  }

  get secureGroup() {
    return this.signUpForm.controls.secureGroup as FormGroup;
  }

  showPassword() {
    this.show = !this.show;
  }

  onSubmit() {

    if (this.signUpForm.invalid) {
      this.formIsNotFilled = true;
      setTimeout(() => {
        this.formIsNotFilled = false
      }, 5000)
      return
    }

    if (this.signUpForm.valid){
      this.signedUp = true;

      setTimeout(() => {
        this.signUpForm.reset();
      }, 5000)
    }

    setTimeout(() => {
      this.signedUp = false
    }, 5000)

    console.log('SUBMITED', this.signUpForm.value);
  }

  ngOnInit(): void {
  }

}
