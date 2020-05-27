import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserServiceService, private router: Router) { }
  hide = true;
  sendLogin(loginForm: NgForm) {
    this.service.postLoginForm(loginForm.value).subscribe(data => {
      console.log(data)
      if (data.msg === "please register") {
        this.router.navigateByUrl('/Signup')
        loginForm.reset();
      } else {
        console.log(data);
        console.log(data.isLoggedIn)
        this.service.isLogIn = data.user;
        // this.service.isLoggedIn = data.isLoggedIn
        localStorage.setItem('isLoggedIn', JSON.stringify(data.isLoggedIn));
        this.service.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
        this.router.navigateByUrl('/Home');
      }
    }, err => {
      console.log(err)
    }, () => {
      alert('login successfully')
    })
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
  getErrorMessage1() {
    return this.password.hasError('minLength') ? 'minimum length is required' :
      this.password.hasError('password') ? 'Not a valid password' :
        '';
  }
}
