import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-expired-task',
  templateUrl: './expired-task.component.html',
  styleUrls: ['./expired-task.component.css']
})
export class ExpiredTaskComponent implements OnInit {
  user: any
  particularUserDetils: any;
  constructor(private service: UserServiceService, private taskService: TaskService) { }

  ngOnInit() {
    let toDayDate = new Date()
    console.log(toDayDate)
    this.user = this.service.isLogIn;
    console.log(this.user);
    this.taskService.getParticularUserTask(this.user).subscribe(taskDetail => {
      this.particularUserDetils = taskDetail
    })
  }

}
