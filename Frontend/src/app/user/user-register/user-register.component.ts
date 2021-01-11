import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm! : FormGroup;
  //formBuilder: any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }
  createRegistrationForm(){

    this.registerationForm=this.fb.group({
      userName:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(8)]],
      confirmPassword:[null,Validators.required],
      mobile:[null,[Validators.required,Validators.minLength(10)]],
    },{validators:this.passwordMatchingValidator});
  }
  passwordMatchingValidator(fg:FormGroup):Validators | null{

    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null:
     {notmatched: true};
  }



  onSubmit(){
    console.log(this.registerationForm);
  }

}
