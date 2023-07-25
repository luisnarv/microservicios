import { Component, Input, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Character } from "../../models/Characters.models";
import { Dataservices } from "../../service/service.service";
import { FormCharacterComponent } from '../form-character/form-character.component';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [Dataservices],

})
export class CharactersComponent implements OnInit {
  value: string = "";
  datasave: Character[] = [];
  datos: Character[] = [];

  constructor(private service: Dataservices) { }


 left = 0 
 rigth = 4
flecha =">"
flecha2= "<"

 changueCardRight(){
  const value = this.datos.length;
  if (this.rigth >= value){
    this.rigth = 4;
    this.left = 0;
  }else {
    this.rigth= this.rigth +4
    this.left= this.left +4
  }
 }

 changueCardLeft(){
  const value = this.datos.length;
  if (this.left === 0){
    this.rigth = value;
    this.left = value -4;
  }else {
    this.rigth= this.rigth -4
    this.left= this.left -4
  }
 }



  @Input() data: Character = {
    _id: "",
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: new Date(),
    gender: "",
    homeworld: "",
    films: ""
  };


Delete(value :string){
 this.service.DeleteCharacter(value)
  const data = this.datos.filter((e) => 
    e._id !== value)
  this.datasave = data;
  this.datos = data;
  this.service.setItem("character",JSON.stringify(data))
}


  Search() {
    console.log(this.value)
    const data = this.datasave.filter(e => e.name.toLocaleLowerCase().includes(this.value.toLocaleLowerCase()))
    this.datos = data
  }


  async ngOnInit() {
    const value = this.service.getItem("character");
    this.datasave = JSON.parse(value);
    this.datos = JSON.parse(value);

  }
}
