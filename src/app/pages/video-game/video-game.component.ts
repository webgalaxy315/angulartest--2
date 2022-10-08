import { Component, OnInit } from '@angular/core';

import { VideoGamesStateService } from './video-game-state.service';

@Component({
  selector: 'app-video-game',
  templateUrl: './video-game.component.html',
  styleUrls: ['./video-game.component.scss']
})
export class VideoGameComponent implements OnInit {
  videoGames$ = this.videoGamesStateService.videoGames$;
  isLoading$ = this.videoGamesStateService.isLoading$;

  constructor(private videoGamesStateService: VideoGamesStateService) {}

  ngOnInit(): void {
    this.videoGamesStateService.load();
  }
}
