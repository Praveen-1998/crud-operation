import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  myForm: FormGroup;
  details: any = []
  user: any;
  particularUserDetils: any = [];
  backendUrl = "http://localhost:4000";
  constructor(private fb: FormBuilder, private service: UserServiceService, private taskService: TaskService, private http: HttpClient, private router: Router) { }
  ngOnInit() {
    this.user = this.service.isLogIn;
    console.log(this.user);
    this.taskService.getParticularUserTask(this.user).subscribe(taskDetail => {
      console.log(taskDetail);
      this.particularUserDetils = taskDetail
    })
  }
  editTask(details) {
    console.log(details);
    localStorage.setItem('details', JSON.stringify(details));
    this.router.navigateByUrl('/update-task');
  }
  deleteParticularTask(details){
    console.log(details._id)
    this.taskService.deleteTask(details._id).subscribe(deletedDetails => {
      console.log(deletedDetails)
      this.router.navigateByUrl('/Home')
      this.taskService.getParticularUserTask(details.createdBy).subscribe(details => {
        console.log(details);
      });
    })
  }
}
