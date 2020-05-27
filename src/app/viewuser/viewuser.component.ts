import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  constructor(private firebaseService: FirebaseserviceService, private router: Router) {
   }


  updateUser(user){
    this.firebaseService.selectedUser=user;  
    this.router.navigateByUrl('/crud');
  }

  deleteUser(user){
    this.firebaseService.deleteData(user).subscribe(resData => {
      this.firebaseService.getData();
    })
  }
  ngOnInit() {
  }

}
