import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {ConnexionApiService} from "../../services/conexion-api.service";
import {MaterialModuleModule} from "../../modules/material-module/material-module.module";
import {EnviromentService} from "../../services/enviroment.service";

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [
    RouterLink,
    MaterialModuleModule
  ],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.scss'
})
export class JuegoComponent implements OnInit{
  endPoint="game?id="
  options: any;
  cargando:boolean=true;
  errorEncontrado: boolean=false;
  constructor(private apiService: ConnexionApiService, private router: Router, private env: EnviromentService) {
    this.options=[];
  }
  ngOnInit():void {
    var currentUrl = this.router.url;
    let idJuego=currentUrl.substring(1)
    let urlFinal=this.env.urlApi+this.endPoint+idJuego;
    console.log(urlFinal)
    this.apiService.getData(urlFinal).subscribe(data => {
      this.options = data;
      console.log(this.options)
      this.cargando=false
      if(this.options.status===0){
        this.errorEncontrado=true;
      }
    });
  }


}
