import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './Components/characters/characters.component';
import { FilmsComponent } from './Components/films/films.component';
import { PlanetsComponent } from './Components/planets/planets.component';
import { FormCharacterComponent } from './Components/form-character/form-character.component';
import { FormFilmsComponent } from './Components/form-films/form-films.component';
import { FormPlanetsComponent } from './Components/form-planets/form-planets.component';
import { HomeComponent } from './Components/home/home.component';
import {Dataservices} from './service/service.service'


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    FilmsComponent,
    PlanetsComponent,
    FormCharacterComponent,
    FormFilmsComponent,
    FormPlanetsComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
  ],
  providers: [Dataservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
