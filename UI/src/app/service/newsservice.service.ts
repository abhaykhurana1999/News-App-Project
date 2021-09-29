import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {

  constructor(private http:HttpClient) { }
  
  readonly url="https://newsapi.org/v2/everything?q=apple&from=2021-09-13&to=2021-09-13&sortBy=popularity&apiKey=6aa2c474003e460b94dc2e4479d45fd2";

  getNews():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
