import { Component } from '@angular/core';
import { MusicPlayerState } from './helpers/music-player-state';
import { tracks } from './helpers/tracks';
import { MusicService } from './services/music.service';
import moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'music-playlist';
  state = MusicPlayerState;
  readonly tracks = tracks;

  constructor(public musicService: MusicService) {}

  goToTime(change: any) {
    this.musicService.goToTime(change.target.value);
  }

  getFormattedTime(timeInSeconds: number) {
    return moment.utc(timeInSeconds * 1000).format('mm:ss');
  }

  pause() {
    console.log('state: ', this.state);
    this.musicService.pause();
  }

  resume() {
    console.log('state: ', this.state);
    this.musicService.resume();
  }

  next() {
    const index = tracks.indexOf(this.state.activeTrack) + 1;
    if (index < tracks.length) {
      this.state.activeTrack = tracks[index];
      this.musicService.playNewFile(tracks[index]);
    }
  }

  previous() {
    const index = tracks.indexOf(this.state.activeTrack) - 1;
    if (index >= 0) {
      this.state.activeTrack = tracks[index];
      this.musicService.playNewFile(tracks[index]);
    }
  }
}
