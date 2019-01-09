import { Component, OnInit,ViewChild } from '@angular/core';
//import { ViewChild } from '@angular/core/src/metadata/di';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CebComponent } from 'src/app/components/concepts/ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit, AfterViewInit {
  ageList:number[]=[1,2,3,4,5];
  loggedInUser: string;

  @ViewChild(CebComponent) cebData;

  constructor() { 
    console.log("Inside Constructor");
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
  }

  ngAfterViewInit(){
    console.log("Inside ngAfterViewInit");
    console.log(this.cebData);
  }
  onProfileLoadedHandler(msgFromChild){
    //alert("This is the message from child - ceb --> concepts "+msgFromChild);
    this.loggedInUser = msgFromChild;
  }
}
