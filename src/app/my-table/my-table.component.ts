import { Component, Input, OnInit } from '@angular/core';
import { MyProjectService } from '../my-project.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  objects:any=[]
  detailsobjects:any=null;
  persons:any=null;
  constructor(private myservice:MyProjectService) { }

  ngOnInit(): void {
    this.myservice.gettable().subscribe(value=>{
      this.objects=value;
      console.log(value)
    })
   
  }
  delete(index:number){
    this.myservice.delete(index)

  }

  tr(object:any){
    this.persons=null;
    this.detailsobjects=object;
  }

  edit(object:any){
    this.detailsobjects=null;
    this.persons=object;
  }
  
}
