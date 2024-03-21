import {Component, NgModule} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MaterialModuleModule} from "./modules/material-module/material-module.module";
import {HttpClientModule} from "@angular/common/http";


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
  pages: string[] =["MMORPG", "Shooter", "MOBA", "Anime", "BattleRoyal", "Strategy", "Fantasy", "SciFi", "CardGames", "Racing",
    "Fighting", "Social", "Sports"]
  toggleMenu(){
    if(this.mostrarMenu){
      this.mostrarMenu=false;
    }else {
      this.mostrarMenu=true
    }
    console.log(this.mostrarMenu)
  }
}
