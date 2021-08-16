import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details-page',
  templateUrl: './my-details-page.component.html',
  styleUrls: ['./my-details-page.component.css']
})
export class MyDetailsPageComponent implements OnInit {
  @Input() objects:any={};
  constructor() { }

  ngOnInit(): void {
  }

}
