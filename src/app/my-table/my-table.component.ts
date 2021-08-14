import { Component, OnInit } from '@angular/core';
import { MyProjectService } from '../my-project.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  objects:any=[]

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
  
}
