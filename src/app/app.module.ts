import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule, HttpClient} from '@angular/common/http'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatInputModule } from '@angular/material';




import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ExpiredTaskComponent } from './expired-task/expired-task.component';
import { CrudComponent } from './crud/crud.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CreateTaskComponent,
    ViewTaskComponent,
    UpdateTaskComponent,
    ExpiredTaskComponent,
    CrudComponent,
    ViewuserComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      // {path: '', redirectTo: 'Home', pathMatch: 'full' },
      // {path:'login', component:LoginComponent},
      // {path:'Home',component:HomeComponent},
      // {path :'Signup',component:SignupComponent},
      // {path :'create-task',component:CreateTaskComponent},
      // {path :'view-task',component:ViewTaskComponent},
      // {path :'update-task',component:UpdateTaskComponent},
      {path :'crud',component:CrudComponent},
      {path :'view-user',component:ViewuserComponent}




    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
