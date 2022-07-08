import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-rmf',
  templateUrl: './rmf.component.html',
  styleUrls: ['./rmf.component.css'],
})
export class RmfComponent {
  constructor(private fb: FormBuilder) {}
  registrationForm = this.fb.group(
    {
      employeeName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          // this.forbiddenNameValidator,
        ],
      ],
      employeeId: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(7)],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      designation: [
        '',
        [Validators.required, this.forbiddenNameValidator(/ceo/)],
      ],
      department: ['', [Validators.required, Validators.minLength(3)]],

      emailId: ['', [Validators.email]],
      mobileNumber: this.fb.array([this.fb.control('')]),
      employeeAddress: this.fb.array([
        this.fb.group({
          street: '',
          area: '',
          city: '',
          state: '',
          country: '',
          pincode: '',
        }),
      ]),
    }
    // ,{ Validator: this.passwordValidator }
  );

  get mobileNumber() {
    return this.registrationForm.get('mobileNumber') as FormArray;
  }
  addMobileItem() {
    this.mobileNumber.push(this.fb.control(''));
  }

  get employeeAddress() {
    return this.registrationForm.get('employeeAddress') as FormArray;
  }
  addAddressItem() {
    this.employeeAddress.push(
      this.fb.group({
        street: '',
        area: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
      })
    );
  }
  forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = forbiddenName.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  // passwordValidator(group: AbstractControl): { [key: string]: boolean } | null {
  //   const password = group.get('password');
  //   const confirmPassword = group.get('confirmPassword');
  //   return password &&
  //     confirmPassword &&
  //     password.value != confirmPassword.value
  //     ? { misMatch: true }
  //     : null;
  // }

  // registrationForm = new FormGroup({
  //   employeeName: new FormControl(''),
  //   designation: new FormControl(''),
  //   department: new FormControl(''),
  //   emailId: new FormControl(''),
  //   mobileNumber: new FormControl(''),
  //   employeeAddress: new FormGroup({
  //     street: new FormControl(''),
  //     area: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     country: new FormControl(''),
  //     pincode: new FormControl(''),
  //   }),
  // });

  // loadApiData() {
  //   this.registrationForm.patchValue({
  //     employeeName: 'Kesani Panduranga',
  //     designation: 'Developer',
  //     department: 'Engineering',
  //     emailId: 'Pandu@mail.com',
  //     mobileNumber: '0992345837',
  //     employeeAddress: {
  //       street: 'Rocks Way',
  //       area: 'New Town',
  //       city: 'Udaipur',
  //       state: 'Rajasthan',
  //       country: 'India',
  //       pincode: '890876',
  //     },
  //   });
  // }
}
