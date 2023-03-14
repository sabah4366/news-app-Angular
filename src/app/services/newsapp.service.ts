import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsappService  {

  constructor() { }

  // checkcat(cat:any){
  //   return fetch(`https://newsapi.org/v2/top-headlines/sources?category=${cat}&apikey=fe4d28cef8204040991e9bdb89d769fc`)

  // }
  // checkcountry(con:any){
  //   return fetch(`https://newsapi.org/v2/top-headlines?country=${con}&apiKey=fe4d28cef8204040991e9bdb89d769fc`)

  // }

  sportscat(cat:any){
     return fetch(`https://newsapi.org/v2/top-headlines?q=${cat}&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)

  }

  businesscat(cat:any){
    return fetch(`https://newsapi.org/v2/top-headlines?q=${cat}&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }

  technologycat(cat:any){
    return fetch(`https://newsapi.org/v2/top-headlines?q=${cat}&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }

  healthcat(cat:any){
    return fetch(`https://newsapi.org/v2/top-headlines?q=${cat}&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }

  entertainementcat(cat:any){
    return fetch(`https://newsapi.org/v2/top-headlines?q=${cat}&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }


  generalcat(cat:any){
    return fetch(`https://newsapi.org/v2/top-headlines?q=${cat}&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }


  sciencecat(cat:any){
     return fetch(`https://newsapi.org/v2/top-headlines?q=${cat}&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }

  allnewses(all:any){
    return fetch(`https://newsapi.org/v2/top-headlines?q=${all}&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }

  cnnews(cn:any){
    return fetch(`https://newsapi.org/v2/top-headlines?q=news&apiKey=b51dcabb9d0d4726a322923ecc38dfaa&country=${cn}`)
  }

  catnews(catsrch:any){
    return fetch(`https://newsapi.org/v2/top-headlines?q=${catsrch}&apiKey=b51dcabb9d0d4726a322923ecc38dfaa`)
  }


}
