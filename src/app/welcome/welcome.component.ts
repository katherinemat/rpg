import { Component, Output } from '@angular/core';
import { PlayerService } from './../player.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PlayerService]
})

export class WelcomeComponent {

  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService, private router: Router) {}


  createNewPlayer(name: string, character: string) {
    var newPlayer = new Player(name, character);
    this.playerService.setPlayer(newPlayer);
    console.log(name);
    console.log(character);
  }

}
// export const PLAYER: Player = new Player("kaz", "mario");
