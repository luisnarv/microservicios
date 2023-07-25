import { Component, OnInit, Input } from '@angular/core';
import { Dataservices } from './service/service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Dataservices,],
})
export class AppComponent  {
  title = 'starwars App';


  constructor(private service: Dataservices, private router: Router, private route: ActivatedRoute) { }
  

  url: string = "http://localhost:8000/character/";
  url1: string = "http://localhost:8000/films";
  url2: string = "http://localhost:8000/planets";



}
