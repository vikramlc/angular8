import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static: false}) signupForm: NgForm;

  genders = ['male', 'female'];
  defaultQuestion = 'teacher';
  answer = '';
  users = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  isSubmitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // // Used to reset the entire form
    // this.signupForm.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.isSubmitted = true;
    this.users.username = this.signupForm.value.userData.username;
    this.users.email = this.signupForm.value.userData.email;
    this.users.secretQuestion = this.signupForm.value.secret;
    this.users.answer = this.signupForm.value.questionAnswer;
    this.users.gender = this.signupForm.value.gender;

    // Resets the data once submitted in the UI input form
    this.signupForm.reset();
  }

}
