import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute } from'@angular/router';



declare var $: any;

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  
  contactData: Object;
  editableContactData: Object;
  contactId: number;
  updateStatus: string;
  formErr: string="All values are mandatory";
  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.contactId = params['id'];
      console.log(this.contactId); // print the arameter to the console
    })
   }


  ngOnInit() {
    this.contactService.getContactById(this.contactId)
    .subscribe( resp => {
      console.log("resp", resp);
      this.contactData=resp;
      //duplicate the oblect
      this.editableContactData = JSON.parse(JSON.stringify(this.contactData));
    });
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

  }

  onUpdateHandler(){
    console.log(this.editableContactData);
    this.contactService.updateContact(this.editableContactData)
     .subscribe( resp => {
      console.log("resp", resp);
      this.contactData = resp;
      this.editableContactData = JSON.parse(JSON.stringify(this.contactData));
      this.updateStatus="Updated successfully!"

      setTimeout(() => {
      $('#exampleModal').modal('hide');
      },1000);
    });
  }




}