export const MusicPlayerState = {
  duration: 0,
  currentTime: 0,
  isPlaying: false,
  playbackRate: 0,
  activeTrack: {
    url: '',
    name: '',
    artist: '',
    img: '',
    isFavorite: false,
  },
};

export interface MusicPlayerState {
  duration: number;
  currentTime: number;
  isPlaying: boolean;
  playbackRate: number;
  activeTrack: {
    url: string;
    name: string;
    artist: string;
    img: string;
    isFavorite: boolean;
  };
}
