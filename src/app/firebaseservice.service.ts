import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { User } from './crud/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {

  url: string='https://crud-app-8ebfc.firebaseio.com/';
  users=[];
  constructor(private http:HttpClient) { 
    this.getData();
  }


  selectedUser:User={
    name:null,
    email:null,
    phno:null,
    id:null
    }


  postData(data){
    return this.http.post(`${this.url}/users.json`,data); 
  }

  getData(){
    this.http.get(`${this.url}users.json`).pipe(map(resData => {
      let usersArray =[];
      for(let key in resData){
         usersArray.push({...resData[key],id:key})
      }
      return usersArray;
    })).subscribe(data => {
      this.users=data;
      console.log(data);
    },err=>{
      console.log(err);
    });
  }

  updateData(data){
    return this.http.put(`${this.url}users/${data.id}.json`,data);
  }

  deleteData(data){
    return this.http.delete(`${this.url}users/${data.id}.json`);
   }
}
