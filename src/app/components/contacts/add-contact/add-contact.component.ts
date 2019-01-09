import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  //like schema
  // contactData: Object = {
  //   username:"",
  //   email:"",
  //   phone:""
  // }



  formErr: string = "* All field mandatory";

    //  1. connect to service using dep injection
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }
  onSubmitHandler(formData){
    console.log(formData);
    //console.log(formData.form.controls.mail.invalid);
    if(formData.untouched)
    {
      this.formErr = "Not touched it seems";
    }
    if(!formData.form.controls.mail.invalid)
    {
      this.formErr = "please provide mail";
    }

    // 2. identify the service the method  and pass the data
    this.contactService.create(formData.value)
      .subscribe( resp => {
        console.log("resp", resp);
        alert("Thanks! contact added");
      });

    // 3. get the responce from service
  }




}


    //1.send the above data to service
    //  1.1 connect to service
    //  1.2 identify the service the method  
    //2.get the responce from service