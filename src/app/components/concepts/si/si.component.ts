import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/interfaces/iprofile';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {

  myName: string="Subhasis";
  exp: number =4;
  isLoggedIn: boolean = false;

  skills: any[] = ['html','css','ng','react']; 

  someData: any ='';
  myProfile: IProfile;
 
  constructor() { }

  ngOnInit() {
  }

  getExperience(): string{
    return this.exp + "Years";
  }
  

}
