import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './eb.component.html',
  styleUrls: ['./eb.component.css']
})
export class EbComponent implements OnInit {

  onTestBtnClick(evt){
    console.log(evt);
    alert("WoRkS!");
  }
  constructor() { }

  ngOnInit() {
  }

}
