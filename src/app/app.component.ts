import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MaterialModuleModule} from "./modules/material-module/material-module.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModuleModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PracticaVideoJuegos';
  mostrarMenu=false;
  toggleMenu(){
    if(this.mostrarMenu){
      this.mostrarMenu=false;
    }else {
      this.mostrarMenu=true
    }
    console.log(this.mostrarMenu)
  }
}
