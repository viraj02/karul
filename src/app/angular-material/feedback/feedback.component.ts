import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  constructor() { }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      nameFormControl: new FormControl('', [
        Validators.required, Validators.pattern('^([a-zA-Z]){2,30}$')
      ]),
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ])
    });
  }

  resetForm() {
    this.feedbackForm.reset('');
  }

  getFeedbackFormValue(field?) {

    if (field == 'nameFormControl') {
      console.log(this.getErrorStatus(field))
    }

    // return this.feedbackForm.value;
    return this.feedbackForm.valid;
  }

  getErrorStatus(formControl) {
    return this.feedbackForm.controls[formControl].errors;
  }

  submitFeedback(): void {
    console.log(this.feedbackForm.controls);
  }

}
