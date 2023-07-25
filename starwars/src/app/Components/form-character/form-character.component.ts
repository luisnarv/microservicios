import { Component } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Dataservices } from 'src/app/service/service.service';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css'],
  providers: [Dataservices],
})
export class FormCharacterComponent {

  constructor (private http:HttpClient, private service:Dataservices){}

id = this.service.getItem("character")
dI = JSON.stringify(this.id);



  character = {
    _id: this.dI.length,
    name: "",
    height: "",
    hairColor: "",
    skinColor: "",
    birthYear: "",
    gender: ""
  };


 // private apiUrl = "http://localhost:8001/character";
  private apiUrl = "http://localhost:8004/characters";

  postData(character: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, character, { headers });
  }



  onSubmit() {
    console.log(this.character);
      new Promise((resolve, reject) => {
       this.postData(this.character).subscribe(
      (response) =>{
           console.log(response)
         resolve(response) 
         }, error => {
           console.error(error);
         })
      })
  }

}
