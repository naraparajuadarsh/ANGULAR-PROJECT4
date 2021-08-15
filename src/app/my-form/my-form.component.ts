import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyProjectService } from '../my-project.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  myfriends:FormGroup;

  formArray:any;

  constructor(private myservice:MyProjectService) {
    this.myfriends=new FormGroup({
      name:new FormControl(null,Validators.required),
      id:new FormControl(null,Validators.required),
      year:new FormControl(null,Validators.required),
      color:new FormControl(null,Validators.required),
      pantone_value:new FormControl(),
      cars:new FormArray([])
    })
   }

   addcars()
    {
      (<FormArray>this.myfriends.controls.cars).push(
            new FormGroup({
              name:new FormControl(),
              cars:new FormControl(),
              age:new FormControl()
            })
      )
        console.log(this.myfriends.controls.cars.value)
    }

   submit(){
    console.log(this.myfriends)
    this.myservice.form(this.myfriends.value).subscribe(Value=>{
      alert("sucess")
    },
    error=>{
      alert("fail")
    }) 
  }

  ngOnInit(): void {
    
  }

}
