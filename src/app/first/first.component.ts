import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [PlayerService]
})

export class FirstComponent implements OnInit {

  constructor(private router: Router, private playerService: PlayerService, private location: Location) {}

  player: Player;

  ngOnInit() {
    this.player = this.playerService.getPlayer();
  }

  consumeFireball() {
    this.player.score += 10;
  };

  consumeIceball() {
    this.player.score += 12;
  };

}
