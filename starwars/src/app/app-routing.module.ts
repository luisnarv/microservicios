import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersComponent} from "./Components/characters/characters.component"
import { FilmsComponent } from './Components/films/films.component';
import { PlanetsComponent } from './Components/planets/planets.component';
import { FormCharacterComponent } from './Components/form-character/form-character.component';
import { FormFilmsComponent } from './Components/form-films/form-films.component';
import { FormPlanetsComponent } from './Components/form-planets/form-planets.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:"characters", component: CharactersComponent},
  {path:"films", component: FilmsComponent},
  {path:"planet", component: PlanetsComponent},
  {path:"neWcharacter", component: FormCharacterComponent},
  {path:"neWfilm", component: FormFilmsComponent},
  {path:"neWplanet", component: FormPlanetsComponent},
  {path:"", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
