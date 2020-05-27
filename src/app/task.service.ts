import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { 
    this.getAllTasks();
  }
  backendUrl = "http://localhost:4000";
  allTaskList: any = [];

  postTask(details) {
    return this.http.post<any>(`${this.backendUrl}/postTask`, details)
  }

  getAllTasks() {
    this.http.get<any>(`${this.backendUrl}/getAlltasks`).subscribe(allTasks => {
      console.log(allTasks)
      this.allTaskList = allTasks
    }, err => {
      console.log(err);
    }, () => {
      console.log('all tasks got successfully');
    })
  }
  getParticularUserTask(username) {
    console.log(username)
    return this.http.get<any>(`${this.backendUrl}/getParticularTask/${username}`)

  }

  updateTaskDetails(updatedDetails) {
    return this.http.post<any>(`${this.backendUrl}/updateParticularTask`,updatedDetails)
  }
  deleteTask(id) {
    return this.http.delete<any>(`${this.backendUrl}/deleteParticularTask/${id}`)
  }
}
