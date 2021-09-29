import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

import { Users } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user :Users=new Users();
    public users:Array<Users>=[];
    message:boolean=false;
    toggle=true;
    constructor(private auth:AuthenticationService){}
  
 ngOnInit(){}
   loginForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
   })
   get username(){
     return this.loginForm.get('username');
   }

get password(){
    return this.loginForm.get('password');
}
signIn(){
  this.toggle=false;
  if(this.loginForm.valid){
    this.auth.login(this.loginForm.value).subscribe(result=>{ //when i will got jwt token
      if(result.tokenType==="Bearer"){
        console.log(result);
        alert("Login Sucess");
        this.message=true;
      }}, error => {
        alert("Login Failed");
        console.log(error)
      });
  } 

// console.log (this.loginForm.get('email')?.value)

/*  //using local storage authentication
  if(this.loginForm.get('username')?.value===localStorage.getItem("username"))
  {
    if(this.loginForm.get('email')?.value===localStorage.getItem("email"))
    {
      if(this.loginForm.get('password')?.value===localStorage.getItem("password"))
      {
        //alert("successfully loged in");
        this.message=true
       
      }else{
        alert("Your password is wrong!!!");
      } 
    }else{
      alert("Your email is invalid!!!");
    } 
  }else{
    alert("Your Username is invalid!!!");
  } 
}
  
*/}}
