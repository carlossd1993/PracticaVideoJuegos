import {Component, Input} from '@angular/core';
import {MaterialModuleModule} from "../../modules/material-module/material-module.module";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModuleModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() titulo?:string;
  @Input() imagen?:string;
  @Input() shortDescription?:string;
  @Input() id?:string
}
