import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service :UserServiceService,private router:Router) { }


  postSignUp(signupForm:NgForm){
    this.service.postSignUpForm(signupForm.value).subscribe(data=>{
      console.log(data);
      // console.log(data.msg)
      if(data.msg==="email already exists..."){
        alert('email already exists please enter another email')
        this.router.navigate(['/Signup'])
        signupForm.reset();
      }else{
        this.router.navigate(['/login'])
        alert('registered successfully');
      }  
    },err=>{
      console.log(err)
    }
    )
  }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a email only' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorMessage1(){
    return this.password.hasError('minLength') ? 'minimum length is required' :
        this.password.hasError('password') ? 'Not a valid password' :
            '';
  }

}
