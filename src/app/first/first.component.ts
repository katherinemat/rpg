import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  player: Player = new Player("kaz");


}
