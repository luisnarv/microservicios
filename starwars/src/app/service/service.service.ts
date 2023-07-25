import { Component, Injectable } from "@angular/core";
import { Character } from "../models/Characters.models";
import { Film } from "../models/Films.models";
import { Planet } from "../models/Planets.models";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})


export class Dataservices {
  constructor(private http: HttpClient ) { }
  

setItem(key: string, value:any): void{
  localStorage.setItem(key, JSON.stringify(value))
}

getItem(key: string){
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data): null
 }
 

DeleteCharacter(value: string){
  new Promise((resolve, reject) => {
    this.http.delete<any>(`http://localhost:8004/characters/${value}`).subscribe(character => {
      resolve(character)
      }, error => {
        console.error(error);
      })
   })
}

DeleteFilm(value: string){
  new Promise((resolve, reject) => {
    this.http.delete<any>(`http://localhost:8004/Films/${value}`).subscribe(character => {
      resolve(character)
      }, error => {
        console.error(error);
      })
   })
}

DeletePlanet(value: string){
  new Promise((resolve, reject) => {
    this.http.delete<any>(`http://localhost:8004/Planets/${value}`).subscribe(character => {
      resolve(character)
      }, error => {
        console.error(error);
      })
   })
}




 getcharacter(){
   new Promise((resolve, reject) => {
    this.http.get<any>("http://localhost:8004/characters/").subscribe(character => {
      resolve(character)
      const value = JSON.stringify(character)
      this.setItem("character", value) 
      }, error => {
      // Maneja el error aquí
        console.error(error);
      })
   })
}

 getFilms(){
   new Promise((resolve, reject) => {
    this.http.get<Film []>("http://localhost:8004/Films").subscribe(films => {
      const value = JSON.stringify(films)
      this.setItem("films", value) 
      }, error => {
      // Maneja el error aquí
        console.error(error);
      })
   })
}

 getPlanets(){
   new Promise((resolve, reject) => {
    this.http.get<any>("http://localhost:8004/Planets")
    .subscribe(planets => {
        const value = JSON.stringify(planets)
        this.setItem("planets", value)
      resolve(planets) 
      }, error => {
      // Maneja el error aquí
        console.error(error);
      })
   })
}



}
