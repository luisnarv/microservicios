import { Component } from '@angular/core';
import { Dataservices } from 'src/app/service/service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-films',
  templateUrl: './form-films.component.html',
  styleUrls: ['./form-films.component.css'],
  providers: [Dataservices],
})
export class FormFilmsComponent {


  constructor(private http: HttpClient, private service: Dataservices) { }

  id = this.service.getItem("character")
  dI = JSON.stringify(this.id);

  character = {
    _id: this.dI.length,
    title: "",
    openingCrawl: "",
    director: "",
    producer: "",
    releaseDate: "1980-05-17T00:00:00.000Z",
  };

  private apiUrl = "http://localhost:8004/Films";

  postData(character: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, character, { headers });
  }


  onSubmit() {
    console.log(this.character);
    new Promise((resolve, reject) => {
      this.postData(this.character).subscribe(
        (response) => {
          console.log(response)
          resolve(response)
        }, error => {
          console.error(error);
        })
    })
  }

}
