import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactsList: Object[];
  constructor(private contactService: ContactService) { //dep injection
    console.log("inside constructor");
   }

  ngOnInit() {
    console.log("inside ngOnInit");
    this.contactService.getContacts()
      .subscribe( resp => {
        console.log("resp", resp);
        if(resp && resp.length > 0)
        {
        //if else logic to check status of the req
        this.contactsList = resp;
        }
      });
  }

  ngOnDestroy(){
    console.log("bgOnDestroy");
    // place to do unsubscribe
    // clear the data
    // clear interval
  }

}