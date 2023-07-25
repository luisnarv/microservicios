import { Component, Input, OnInit } from '@angular/core';
import { Film } from "../../models/Films.models"
import { Dataservices } from 'src/app/service/service.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  providers: [Dataservices],
})
export class FilmsComponent implements OnInit {

  constructor (public service: Dataservices){}
  value: string = "";
  datasave: Film[] = [];
  datos: Film[] = [];

  @Input() data: Film = {
    _id: "",
    title: "",
    opening_crawl: "",
    director: "",
    producer: "",
    release_date:new Date(),
    characters: "",
    planets:""
  };


  Delete(value :string){
    this.service.DeleteFilm(value)
     const data = this.datos.filter((e) => 
       e._id !== value)
     this.datasave = data;
     this.datos = data;
     this.service.setItem("films",JSON.stringify(data))
   }


  Search() {
    console.log(this.value)
    const data = this.datasave.filter(e => e.title.toLocaleLowerCase().includes(this.value.toLocaleLowerCase()))
    this.datos = data
  }

  ngOnInit() {
 const filmsDta = this.service.getItem("films");
 this.datos = JSON.parse(filmsDta)
 this.datasave = JSON.parse(filmsDta)
 console.log(this.datos)
  }
  

}
