import { Component } from '@angular/core';
import { User } from '../classes/user';
import { EnrollmentService } from '../services/enrollment.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css'],
})
export class TdfComponent {
  title = 'formsTutorial';
  submitted = false;
  topicHasError = true;
  errorMsg = '';

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User(
    'Pandu',
    'rob@test.com',
    5555594785,
    'default',
    'morning',
    true
  );

  constructor(private enrollmentService: EnrollmentService) {}

  validateTopic(value: any) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  onSubmit() {
    this.submitted = true;
    this.enrollmentService.enroll(this.userModel).subscribe(
      (data) => console.log('Success!', data)
      // (error) => this.errorMsg=error.statusText
    );
  }
}
