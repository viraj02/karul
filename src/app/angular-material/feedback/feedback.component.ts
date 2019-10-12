import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  nameError = false;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
  }

  createFormControls() {
    this.feedbackForm = new FormGroup({
      nameFormControl: new FormControl('', [
        Validators.required, Validators.pattern('^[a-zA-Z ]+'), Validators.minLength(2), Validators.maxLength(30)
      ]),
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      phoneFormControl: new FormControl('', [
        Validators.pattern('[0-9]{10}'),
      ]),
      commentFormControl: new FormControl('', [
        Validators.required
      ])
    });
  }

  resetForm() {
    this.feedbackForm.reset();
    this.nameError = false;
  }

  getFeedbackFormValue(field) {

    if (field == 'nameFormControl') {
      if (this.feedbackForm.controls.nameFormControl.value.trim() == '') {
        this.nameError = true;
      } else {
        this.nameError = false;
      }
    }
  }

  getErrorStatus(formControl) {
    return this.feedbackForm.controls[formControl].errors;
  }

  submitFeedback(): void {
    if (this.feedbackForm.valid) {
    }
  }

}
