import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyProjectService {
  objects:any=[{"id":1,"name":"cerulean","year":2000,"color":"#98B2D1","pantone_value":"15-4020"},
                {"id":2,"name":"fuchsia rose","year":2001,"color":"#C74375","pantone_value":"17-2031"},
                {"id":3,"name":"true red","year":2002,"color":"#BF1932","pantone_value":"19-1664"},
                {"id":4,"name":"aqua sky","year":2003,"color":"#7BC4C4","pantone_value":"14-4811"},
                {"id":5,"name":"tigerlily","year":2004,"color":"#E2583E","pantone_value":"17-1456"},
                {"id":6,"name":"blue turquoise","year":2005,"color":"#53B0AE","pantone_value":"15-5217"}]
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

}
