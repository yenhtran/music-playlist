import { Component, OnInit } from '@angular/core';
import { tracks } from '../helpers/tracks';
import { MusicPlayerState } from '../helpers/music-player-state';
import { MusicService, TrackMetaData } from '../services/music.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css',
})
export class TracksComponent implements OnInit {
  readonly tracks = tracks;
  state = MusicPlayerState;

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {}

  playTrack(file: TrackMetaData) {
    this.musicService.playNewFile(file);
  }
}
