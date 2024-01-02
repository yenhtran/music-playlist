import { Injectable } from '@angular/core';
import { MusicPlayerState } from '../helpers/music-player-state';

interface TrackMetaData {
  url: string;
  name: string;
  artist: string;
  img: string;
  isFavorite: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  state = MusicPlayerState;
  audio = new Audio();

  constructor() {}

  resume() {
    this.audio.play();
    this.state.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.state.isPlaying = false;
  }

  goToTime(seconds: number) {
    this.audio.currentTime = seconds;
    this.state.currentTime = this.audio.currentTime;
  }

  changePlaybackSpeed(speed: number) {
    this.audio.playbackRate = speed;
    // this.state.playbackRate = this.audio.playbackRate;
  }

  playNewFile(file: TrackMetaData) {
    this.audio.src = file.url;
    this.audio.play();
    this.state.isPlaying = true;
    this.state.activeTrack = file;
  }
}