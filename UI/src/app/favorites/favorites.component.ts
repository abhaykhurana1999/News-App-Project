import { Component, OnInit } from '@angular/core';
import { FavoriteserviceService } from '../service/favoriteservice.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private fav:FavoriteserviceService) { }
  totalLength:any;
  page:number=1;
  newsList:any=[]

  ngOnInit(): void {
    this.fav.getMyFav(localStorage.getItem("username")).subscribe(response=>{
      // console.log(news);
       this.newsList=response;
       this.totalLength=response.articles.length;
       
     },error=>{
       console.log("Oops!! Unable to find page");
 
     })
   }

}
