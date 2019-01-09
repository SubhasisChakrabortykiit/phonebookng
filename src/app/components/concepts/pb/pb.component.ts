import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './pb.component.html',
  styles: [`
   .red {
     color: red;
   }
   .green {
     color: green;
   }
  `]
})
export class PbComponent implements OnInit {

  developer:string = "Subhasis";
  isLoggedIn:boolean=true;
  getLoggedInStatus(){
    return "hi";
  }
  constructor() { }

  ngOnInit() {
  }

}
