import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { 
  }
    create(contactData){//1.get data from component
      console.log(contactData);
      
      //2.send data to api end point
     return this.http.post("https://jsonplaceholder.typicode.com/users", contactData)
      .pipe(map( (resp ) =>{ //3. receive resp from rest api 
        console.log(resp);
        return resp.json(); //4. send the resp back to comp 
      }));

  }

  getContacts(){
    return  this.http.get("https://jsonplaceholder.typicode.com/users")
    .pipe(map( (resp ) =>{ //3. receive resp from rest api 
      console.log(resp);
      return resp.json(); //4. send the resp back to comp 
    }));
  }

  getContactById(id){ //get id from component
    return  this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
    .pipe(map( (resp ) =>{ //3. receive resp from rest api 
      console.log(resp);
      return resp.json(); //4. send the resp back to comp 
    }));
  }

  updateContact(updatableContactData){
    console.log(updatableContactData);
   return this.http.put("https://jsonplaceholder.typicode.com/users/"+updatableContactData.id,updatableContactData)
   .pipe(map( (resp ) =>{ //3. receive resp from rest api 
    console.log(resp);
    return resp.json(); //4. send the resp back to comp 
  }));
  }

}
