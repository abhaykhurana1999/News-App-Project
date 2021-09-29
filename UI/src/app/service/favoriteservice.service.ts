import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}
@Injectable({
  providedIn: 'root'
})
export class FavoriteserviceService {
 constructor(private http:HttpClient) { }
   
  addToFav(favorite:any): Observable<any> {
    return  this.http.post<any>('http://localhost:9040/news/api/v1/article ',this.parsefav(favorite),httpOptions);

  }
  parsefav(favorite: {})
  {
    Object.keys(favorite);
    console.log(Object.keys(favorite));

  }
  getMyFav(username:any):Observable<any>{
    return this.http.get<any>('http://localhost:9040/news/api/v1/articles ',username);
    
  }
}
