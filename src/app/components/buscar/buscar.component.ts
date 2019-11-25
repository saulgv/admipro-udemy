import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {ServicioHeroeService,heroe} from '../../servicios/servicio-heroe.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'] 
})
export class BuscarComponent implements OnInit {
  heroes:heroe[] = [];
  termino:string;
  cont:number =0;
  constructor(private _activatedRoute: ActivatedRoute,
              private _heroeServicio: ServicioHeroeService ) {
                    
                         this._activatedRoute.params.subscribe(parametros =>{
                        this.termino = parametros['texto'];
                        this.heroes = this._heroeServicio.buscarHeroes(this.termino);

                        this.cont =this.heroes.length;
                        console.log(" se consultaron: " + this.cont + " heroes");
         })
     }

  ngOnInit() {
  }

}
