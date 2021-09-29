import { News } from "../news.model";

export class userfav {
    username:string;
    
    author:string;

         title:string
	
	 description:string
	
	 url:string
	
	 urlToImage:string
	
	 content:string
	
	publishedAt:string
	
	 userId:string
	
	
    
    favorites:News[]
                                           // public favorites:Array<userfav>=[];                       // favorite :userfav=new userfav();
   constructor(){
       this.username='';
       this.author='';
       this.content='';
       this.description='';
       this.title='';
       this.userId='';
       this.publishedAt='';
       this.url='';
       this.urlToImage='';
       this.favorites=[]
       

   }

    
}