import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { FavoriteserviceService } from '../service/favoriteservice.service';
import { NewsserviceService } from '../service/newsservice.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  constructor(private service:NewsserviceService,private fav:FavoriteserviceService,private userService:UserService) { }
  totalLength:any;
  page:number=1;
 headlineDisplay:any=[];
 newsList:News[]=[];
 
 
   
 save(news:News){
   
  const favObject={username: this.userService.getUsername(),news:news}
  this.fav.addToFav(favObject).subscribe(response => {
    if(response.success){
      alert("Successfully added to bookmark!!")
    }
    
  }, error => {
    alert("Failed to add to bookmark!!");
  });
  
  //this.headlineDisplay=this.headlineDisplay+data;
  }
  ngOnInit(): void {
    this.service.getNews().subscribe(response=>{
     // console.log(news);
      this.newsList=response.articles;
      this.totalLength=response.articles.length;
      
    },error=>{
      console.log("Oops!! Unable to find page");

    })
  }
}
