import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ConnexionApiService} from "../../services/conexion-api.service";
import {MaterialModuleModule} from "../../modules/material-module/material-module.module";
import {CardComponent} from "../../components/card/card.component";
import {EnviromentService} from "../../services/enviroment.service";

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [MaterialModuleModule, CardComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent implements OnInit{
  options: any[] = [];
  endpoint:string = "games?category=";
  cargando:boolean=true;
  constructor(private router: Router, private apiService: ConnexionApiService, private env: EnviromentService) {
  }
  ngOnInit() {
    var currentUrl = this.router.url.substring(1);
    console.log(this.env.urlApi+this.endpoint+currentUrl)
    this.apiService.getData(this.env.urlApi+this.endpoint+currentUrl).subscribe(data => {
      this.options = data;
      console.log(this.options)
      this.cargando=false;
    });

  }
}
