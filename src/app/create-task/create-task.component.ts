import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private service : UserServiceService , private taskService : TaskService) { }
  myForm: FormGroup;
  ngOnInit() {
    this.myForm = this.fb.group({
      taskName: this.fb.control(null, [Validators.required]),
      creationTimestamp: this.fb.control(null, [Validators.required]),
      editTimestamp: this.fb.control(null, [Validators.required]),
      expiry: this.fb.control(null, [Validators.required]),
      completionStatus: this.fb.control(null, [Validators.required]),
      createdBy: this.fb.control(this.service.isLogIn, [Validators.required])
    })
  }
  get taskName() {
    return this.myForm.get('taskName') as FormControl;
  }
  get creationTimestamp() {
    return this.myForm.get('creationTimestamp') as FormControl;
  }
   get editTimestamp() {
    return this.myForm.get('editTimestamp') as FormControl;
  } 
  get expiry() {
    return this.myForm.get('expiry') as FormControl;
  } 
  get completionStatus() {
    return this.myForm.get('completionStatus') as FormControl;
  } 
  get createdBy() {
    return this.myForm.get('createdBy') as FormControl;
  }

  submitTask() {
    console.log(this.myForm.value);
    this.taskService.postTask(this.myForm.value).subscribe(details=> {
      console.log(details);
      alert('task created successfully');
      this.router.navigateByUrl('/view-task')
    }, err => {
      console.log(err)
    }, () => {
      console.log('task posted successfully');
    });
  }

}
