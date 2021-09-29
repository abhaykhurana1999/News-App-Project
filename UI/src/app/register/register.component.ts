import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../login/user';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg:boolean=false;
  log:boolean=false;
 
  
  user :Users=new Users();
  
  public users:Array<Users>=[];
 
  constructor(private userService:UserService) { }
 toggle=true;

 loginForm=new FormGroup({
  username:new FormControl('',[Validators.required]),
  name:new FormControl('',[Validators.required]),
  role:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required,Validators.minLength(6)])
 })
 get username(){

  return this.loginForm.get('username');
}
get name(){

  return this.loginForm.get('name');
}
get role(){

  return this.loginForm.get('role');
}
get email(){
  return this.loginForm.get('email');
}
get password(){
  return this.loginForm.get('password');
}

  ngOnInit(): void {
   
   
  }
 
 save(){
   this.toggle=false
   this.user=this.loginForm.value;
   
    this.userService.addUsers(this.user).subscribe(response => {
        this.users.push(response);
        this.user=new Users();
       this.msg=true;
      
      //confirm(" welcome!!  Successfully Registered!! ")
        // document.location.href='http://localhost:4200/login';
    
      this.log=true;


    }, error => {
      console.log(error)
    });
    localStorage.setItem("username",this.loginForm.get('username')?.value);
    localStorage.setItem("email",this.loginForm.get('email')?.value);
    localStorage.setItem("password",this.loginForm.get('password')?.value);
  }


}
