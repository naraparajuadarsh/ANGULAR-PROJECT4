import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyProjectService {
  objects:any=[{"id":1,"name":"Adarsh","year":2000,"color":"#98B2D1",age:"23"},
                {"id":2,"name":"V Sagar","year":2001,"color":"#C74375",age:"23"},
                {"id":3,"name":"Prasad","year":2002,"color":"#BF1932",age:"23"},
                {"id":4,"name":"Ramesh","year":2003,"color":"#7BC4C4",age:"23"},
                {"id":5,"name":"Rohit","year":2004,"color":"#E2583E",age:"23"},
                {"id":6,"name":"Naveen","year":2005,"color":"#53B0AE",age:"23"}]
  constructor(private httpClient:HttpClient) { }

  gettable():Observable<any>{
    //  this.objects=this.httpClient.get("https://reqres.in/api/unknown")
     return of(this.objects)
  }

  delete(index:number):Observable<any>{
    console.log("index",index,this.objects)
    this.objects.splice(index,1)
    console.log(this.objects)
    return of(true)
  }

  form(value:any):Observable<any>{
    console.log(value)
    this.objects.push(value)
    return of(true)
  }

}
