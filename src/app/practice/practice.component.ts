import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent {
  constructor(private fb: FormBuilder) {}
  favoriteColorControl = this.fb.group({
    color: this.fb.array([this.fb.control('')]),
    address: this.fb.array([
      this.fb.group({
        street: [''],
        state: [''],
      }),
    ]),
  });
  get color() {
    return this.favoriteColorControl.get('color') as FormArray;
  }
  addColorItem() {
    this.color.push(this.fb.control(''));
  }
  get address(){
    return this.favoriteColorControl.get('address') as FormArray;
  }
  addAddressItem(){
    this.address.push(this.fb.group({
      street: [''],
      state: [''],
    }))
  }
}
