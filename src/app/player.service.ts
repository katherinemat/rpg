import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { WelcomeComponent } from './welcome/welcome.component';

var player: Player;

@Injectable()
export class PlayerService {

  constructor() { }


  setPlayer(newPlayer) {
    player = newPlayer;
  }

  getPlayer() {
    return player;
  }

}
