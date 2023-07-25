import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/Planets.models';
import { Dataservices } from 'src/app/service/service.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
  providers: [Dataservices],
})
export class PlanetsComponent implements OnInit {
constructor (public service: Dataservices){}

value: string = "";
  datasave: Planet[] = [];
datos : Planet[] = []


@Input() data: Planet = {
  _id: "",
  name: "",
  rotation_period: "",
  orbital_period: "",
  diameter: "",
  climate: "",
  gravity: "",
  terrain: "",
  surface_water: "",
  res_idents: "",
  films: ""
};



Delete(value :string){
 this.service.DeletePlanet(value)
   const data = this.datos.filter((e) => 
     e._id !== value)
   this.datasave = data;
   this.datos = data;
   this.service.setItem("films",JSON.stringify(data))
 }


Search() {
  console.log(this.value)
  const data = this.datasave.filter(e => e.name.toLocaleLowerCase().includes(this.value.toLocaleLowerCase()))
  this.datos = data
}


ngOnInit(){
  const getValue =this.service.getItem("planets");
  this.datos = JSON.parse(getValue);
  this.datasave = JSON.parse(getValue);
}


}

