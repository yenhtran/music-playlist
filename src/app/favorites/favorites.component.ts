import { Component, OnInit } from '@angular/core';
import { MusicPlayerState } from '../helpers/music-player-state';
import { TrackMetaData, tracks } from '../helpers/tracks';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent implements OnInit {
  state = MusicPlayerState;
  favoriteTracks: TrackMetaData[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    tracks.forEach((track) => {
      if (track.isFavorite === true) {
        this.favoriteTracks.push(track);
      }
    });
  }

  playTrack(file: TrackMetaData) {
    this.musicService.playNewFile(file);
  }

  removeFromFavorites(index: number) {
    const trackToRemove = this.favoriteTracks[index];
    const indexOfTrackToRemove = tracks.indexOf(trackToRemove);
    tracks[indexOfTrackToRemove].isFavorite = false;
    this.favoriteTracks.splice(index, 1);
  }
}
