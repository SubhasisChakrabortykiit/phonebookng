import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/shared/account.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  planName: string; 
  newPlan: string;

  //Reactive Form
  contactForm = new FormGroup({ //1.create FormGroup
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required), //3. adding validators for the form 
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
  });

//4. associate the contactForm in html`s formGroup -do in html
//5. specify formControlName in form input elements in html

//pipes

birthDay = new Date(3, 4, 1996);

loremIpsum: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dicta suscipit illum unde ratione officiis non sint fuga similique consequuntur debitis, provident iste quia temporibus reprehenderit, nemo, asperiores quaerat praesentium mollitia";


  constructor( private accountService:AccountService) {
    this.accountService.latestPricingPlan.subscribe((plan)=>{
      console.log(plan);

      this.planName = plan;
    });
  }

  ngOnInit() {
  }

  changePlan(){
    this.accountService.updatePricingPlan(this.newPlan);
  }



}
