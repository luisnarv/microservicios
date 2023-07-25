import { Component } from '@angular/core';
import { Dataservices } from 'src/app/service/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[Dataservices],
})
export class HomeComponent {
 


  constructor(private service: Dataservices, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {
    const data = this.service.getItem("character")
    const data1 = this.service.getItem("films")
    const data2 = this.service.getItem("planets")

    if (!data) { this.service.getcharacter(), console.log("Entro ") }
    if (!data1) { this.service.getFilms(), console.log("Entro1 ") }
    if (!data2) { this.service.getPlanets(), console.log("Entro 2") }


    this.navigateTo("value")

  }

  Show = {
    showCharacter: true,
    showFilms: true,
    showPlanets: true,
  };

  navigateTo(value: string) {
    if(value === "characters"){
      this.Show.showCharacter = true
      this.Show.showFilms = false
      this.Show.showPlanets= false
    }else 
    if(value === "films"){
      this.Show.showCharacter = false
      this.Show.showFilms = true
      this.Show.showPlanets= false
    }else
    if(value === "planets"){
      this.Show.showCharacter = false
      this.Show.showFilms = false
      this.Show.showPlanets= true
    }else {
      this.Show.showCharacter = true
      this.Show.showFilms = true
      this.Show.showPlanets= true
    }
  }

}
