import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  myForm: FormGroup;
  formData: any

  constructor(private fb: FormBuilder, private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    this.formData = JSON.parse(localStorage.getItem('details'));
    this.myForm = this.fb.group({
      id: this.fb.control(this.formData._id),
      taskName: this.fb.control(this.formData.taskName),
      creationTimestamp: this.fb.control(this.formData.creationTimestamp),
      editTimestamp: this.fb.control(this.formData.editTimestamp),
      expiry: this.fb.control(this.formData.expiry),
      completionStatus: this.fb.control(this.formData.completionStatus),
      createdBy: this.fb.control(this.formData.createdBy)
    });
  }

  get id() {
    return this.myForm.get('id') as FormControl;
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

  submitTask(){
    console.log(this.myForm.value);
    this.taskService.updateTaskDetails(this.myForm.value).subscribe(updatedDetails => {
      console.log(updatedDetails);
    })
    this.router.navigateByUrl('/view-task')
  }
}
