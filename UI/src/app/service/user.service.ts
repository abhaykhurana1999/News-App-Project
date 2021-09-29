import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Users } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http:HttpClient) { }
  
  addUsers(user :Users): Observable<Users> {
      return  this.http.post<Users>('http://localhost:3000/users',user);
  
    }
    getUsername(){
      return localStorage.getItem("username")
    }
    
}
