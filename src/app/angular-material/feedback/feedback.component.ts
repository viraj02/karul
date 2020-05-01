import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../../Services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  nameError = false;
  userFeedBack = [];
  isLoginPage: boolean = true;
  isDOMReady: boolean = false;
  formData: any = [];
  buttonDetails: any = [];

  constructor(private feedbackService: FeedbackService, ) { }

  ngOnInit() {
    this.getFormData();
    // this.createFormControls();
    // this.addNewFormControl();

    // if (this.isLoginPage) {
    //   this.addNewFormControl();
    // }
  }

  getFormData() {
    this.feedbackService.getFormData().subscribe((data) => {
      this.formData = data['formField'];
      this.buttonDetails = data['formButton'];
      this.createFormControls();
    });
  }

  createFormControls() {
    this.feedbackForm = new FormGroup({
      // nameFormControl: new FormControl('', [
      //   Validators.required, Validators.pattern('^[a-zA-Z ]+'), Validators.minLength(2), Validators.maxLength(30)
      // ]),
      // emailFormControl: new FormControl('', [
      //   Validators.required,
      //   Validators.email,
      // ]),
      // phoneFormControl: new FormControl('', [
      //   Validators.pattern('[0-9]{10}'),
      // ])
    });
    this.addNewFormControl();
  }

  // To add Form Control Dynamically.
  addNewFormControl() {
    this.formData.forEach((frmData, i) => {
      this.feedbackForm.addControl(frmData.formcontName, new FormControl('', [frmData.validationType.toString()]));
    });
    setTimeout(() => {
      this.isDOMReady = true;
    }, 3000);
    // this.feedbackForm.addControl('commentFormControl', new FormControl('', [
    //   Validators.required
    // ]));
  }

  resetForm() {
    this.feedbackForm.reset();
    this.nameError = false;
  }

  getFeedbackFormValue(field) {

    if (field === 'nameFormControl') {
      if (this.feedbackForm.controls.nameFormControl.value && this.feedbackForm.controls.nameFormControl.value.trim() == '') {
        this.nameError = true;
      } else {
        this.nameError = false;
      }
    }
  }

  getErrorMessage(formControl) {
    this.formData.forEach((data) => {
      if (this.feedbackForm.controls.formControl.errors.required) {

      }
    });
  }

  submitFeedback(): void {
    if (this.feedbackForm.valid) {
      this.feedbackService.submitData(this.feedbackForm.value);
      this.resetForm();
    }
  }

}
