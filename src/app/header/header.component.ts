import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  isLoggedIn=false;
  
  constructor(private service:UserServiceService,private router:Router) {}
  sendLogoutForm1(form:NgForm){
    this.service.postLogOut(form.value).subscribe(data=>{
      console.log(data)
      localStorage.clear()
      this.service.isLoggedIn=false;
      this.router.navigate(['/']);
    },err=>{
      console.log(err)
    },()=>{
      console.log("signout successfully")
    })
  }


  ngOnInit() {
  }
}
