import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  

  isLoggedIn;
  isLogIn;
  

   backendUrl="http://localhost:4000";
  
  constructor(private http:HttpClient) {    
  }

postSignUpForm(data){
  return this.http.post<any>(`${this.backendUrl}/signUp`,data)
}
postLoginForm(data){
  return this.http.post<any>(`${this.backendUrl}/login`,data)

}
postLogOut(data){
  return this.http.post(`${this.backendUrl}/logout`,data)
}
}

 

  

