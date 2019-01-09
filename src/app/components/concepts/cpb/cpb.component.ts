import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  // use @INput to make myAge as a attribite/property 
  @Input() myAge:number=22;
  constructor() { }

  ngOnInit() {
  }

}
