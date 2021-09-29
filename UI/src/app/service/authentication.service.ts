import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  getToken(): string {
    throw new Error('Method not implemented.');
  }
  authenticationUser(){

  }

  constructor(private http:HttpClient) { }
  login(data: any):Observable<any>{
    return this.http.post('http://localhost:8080/api/auth/signin',data);

  }
  isUserAuthenticated(token:string):Promise<any>{
    return this.http.post('http://localhost:8080/api/auth/signin',{},{
      headers:new HttpHeaders().set('Authorization',`Bearer ${token}`)
    }).toPromise();
  }
}
