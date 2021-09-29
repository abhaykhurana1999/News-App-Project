import { Source } from "./source.model"

export class News{
    author: string
content: string
description: string
publishedAt: string
source: Source;
title: string
url: string
urlToImage: string
  
    
   constructor(){
       this.author='';
       this.content='';
       this.description='';
       this.publishedAt='';
       this.source=new Source();
       this.title='';
       this.url='';
       this.urlToImage=''

      

    }
}