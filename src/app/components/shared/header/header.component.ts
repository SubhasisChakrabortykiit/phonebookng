import { Component, OnInit } from '@angular/core';
import {AccountService} from 'src/app/services/shared/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //ts
  appName: string = "Phone Book";
  appVersion: string = "1.0.1";
  planName:string="";
  constructor(private accountService:AccountService) { 
    this.accountService.latestPricingPlan.subscribe((plan)=>{
      console.log(plan);
      this.planName = plan;
    });
  }

  ngOnInit() {
  }

}