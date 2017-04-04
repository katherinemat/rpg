import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers: [PlayerService]
})

export class SecondComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  player: Player;

  ngOnInit() {
    // this.player = WelcomeComponent.player;
    this.player = this.playerService.getPlayer();
  }

}
