import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseserviceService } from '../firebaseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private firebaseService: FirebaseserviceService, private router: Router) { }
  message: string;
  postUser(form: NgForm) {
    console.log(form.value)
    if (form.value.id) {
      this.firebaseService.updateData(form.value).subscribe(resData => {
        console.log(resData);
        form.reset();
        this.router.navigateByUrl('/view-user');
        this.firebaseService.getData();
      }, err => {
        console.log(err);
      });
    }
    else {
      this.firebaseService.postData(form.value).subscribe(data => {
        console.log(data);
        form.reset();
        this.message = 'user added successfully';
        setTimeout(() => {
          this.message = null
        }, 5000);
        this.router.navigateByUrl('/view-user');
        this.firebaseService.getData();
      }, err => {
        console.log(err);
      });
    }
  }

  ngOnInit() {
  }

}
