import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyProjectService {
  objects:any=[]
  constructor(private httpClient:HttpClient) { }

  gettable():Observable<any>{
     this.objects=this.httpClient.get("https://reqres.in/api/unknown")
     return this.objects
  }

  delete(index:number):Observable<any>{
    console.log("index",index,this.objects)
    this.objects.splice(index,1)
    console.log(this.objects)
    return of(true)
  }

}
