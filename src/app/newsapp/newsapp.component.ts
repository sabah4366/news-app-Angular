import { Component } from '@angular/core';
import { NewsappService } from '../services/newsapp.service';

@Component({
  selector: 'app-newsapp',
  templateUrl: './newsapp.component.html',
  styleUrls: ['./newsapp.component.css']
})
export class NewsappComponent {
  newses:any;
  cnnewses:any;
  

  constructor(private service:NewsappService){}

  

  checksports(inpt2:any){
    console.log(inpt2.value)
    this.service.sportscat(inpt2.value).then(res=>res.json()).then(data=>{
      this.cnnewses=data.articles
    })
  }

  checkbusiness(inpt3:any){
    console.log(inpt3.value)
    this.service.sportscat(inpt3.value).then(res=>res.json()).then(data=>{
      this.cnnewses=data.articles
    })
    

  }
  checktechnology(inpt4:any){
    console.log(inpt4.value)
    this.service.sportscat(inpt4.value).then(res=>res.json()).then(data=>{
      this.cnnewses=data.articles
    })
    

  }
  checkhealth(inpt5:any){
    console.log(inpt5.value)
    this.service.sportscat(inpt5.value).then(res=>res.json()).then(data=>{
      this.cnnewses=data.articles
    })

  }
  checkentertainmnet(inpt6:any){
    console.log(inpt6.value)
    this.service.sportscat(inpt6.value).then(res=>res.json()).then(data=>{
      this.cnnewses=data.articles
    })


  }
  checkgeneral(inpt7:any){
    console.log(inpt7.value)
    this.service.sportscat(inpt7.value).then(res=>res.json()).then(data=>{
      this.cnnewses=data.articles
    })

  }
  checkscience(inpt8:any){
    console.log(inpt8.value)
    this.service.sportscat(inpt8.value).then(res=>res.json()).then(data=>{
      this.cnnewses=data.articles
    })

  }
  homenews(inpt1:any){
    this.service.allnewses(inpt1.value).then(res=>res.json()).then(data=>{
      this.cnnewses=data.articles
    })
  }

  findcountry(inp:any){
    this.service.cnnews(inp.value).then(res=>res.json()).then(data=>{
      this.cnnewses=data.articles
    })

  }

  findcat(cat1:any){
    
    this.service.catnews(cat1.value).then(res=>res.json()).then(data=>{
      this.cnnewses=data.articles
    })
  }
}
