import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sd',
  templateUrl: './sd.component.html',
  styles: []
})
export class SdComponent implements OnInit {

  isLoggedIn: boolean = true;
  usersList: string[] = ["john", "peter", "Steve", "William"];

  constructor() { }

  ngOnInit() {
  }

  isPremiumUser(){
    return false;
  }

}
