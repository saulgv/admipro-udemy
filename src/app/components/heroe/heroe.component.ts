import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {ServicioHeroeService,heroe} from '../../servicios/servicio-heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:heroe;
  constructor(private _activatedRoute: ActivatedRoute,
              private _heroeServicio: ServicioHeroeService,
              private _router:Router ) { 
          this._activatedRoute.params.subscribe(parametros =>{
                              this.heroe = this._heroeServicio.getHeroe(parametros['id']);
                               })
  }
  ngOnInit() {
  }
  regresar(){
      this._router.navigate(['/heroes']);
  }

}
