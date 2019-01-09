import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userAccount = new BehaviorSubject<string>("Premium");
  latestPricingPlan = this.userAccount.asObservable();//this is now subscribable
  
  constructor() { }

  updatePricingPlan(newPlan){
    this.userAccount.next(newPlan) ;
  }
  
}
