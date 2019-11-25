import { Component, OnInit } from '@angular/core';
import {ServicioHeroeService,heroe} from '../../servicios/servicio-heroe.service';
import {Router,ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:heroe[];  
  constructor(private _heroeServicio: ServicioHeroeService,
              private _activatedRoute: ActivatedRoute,
              private _router:Router) {}

  ngOnInit() {
    this.heroes = this._heroeServicio.getHeroes();
    console.log(this.heroes)
  }
  verHero(numero:Number){
    //console.log("este es el id: " + numero)
    this._router.navigate(['/heroe',numero])
  }
}
