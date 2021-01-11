import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerationForm!: FormGroup;
  user!: User;
  userSubmited!:boolean;

  constructor(private fb: FormBuilder,private userService: UserServiceService) {}

  ngOnInit(): void {
    this.createRegistrationForm();
  }
  createRegistrationForm() {
    this.registerationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.minLength(10)]],
      },
      { validators: this.passwordMatchingValidator }
    );
  }
  passwordMatchingValidator(fg: FormGroup): Validators | null {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value
      ? null
      : { notmatched: true };
  }

  //________________________
  //Getter methods for form controls
  //________________________
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    console.log(this.registerationForm);
    this.userSubmited= true;

    if(this.registerationForm.valid){
   // this.user = Object.assign(this.user, this.registerationForm.value);
    this.userService.addUser(this.userData());
    this.registerationForm.reset();
    this.userSubmited=false;
    }
  }

  userData():User{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    };
  }

}
