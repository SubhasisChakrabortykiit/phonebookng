import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

//step 1. creating custom event in the name os profileLoaded
@Output() profileLoaded = new EventEmitter<string>();
  skills: string[] = ['html','css', 'react'];


  constructor() {

   }

  ngOnInit() {

  }
  sendDataToParent(){
    //step 2: emit the custom event
    this.profileLoaded.emit("Subhasis");
  }

}
