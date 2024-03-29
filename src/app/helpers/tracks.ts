export const tracks = [
  {
    url: 'assets/audioFile/La_Bamba_by_Los_Lobos.mp3',
    name: 'La Bamba',
    artist: 'Los Lobos',
    img: 'assets/cover/LosLobos.jpeg',
    isFavorite: false,
  },
  {
    url: 'assets/audioFile/Imagine_by_John_Lennon.mp3',
    name: 'Imagine',
    artist: 'John Lennon',
    img: 'assets/cover/JohnLennon.jpeg',
    isFavorite: false,
  },
  {
    url: 'assets/audioFile/Mei_Hua_Teresa_Teng.mp3',
    name: 'Mei Hua',
    artist: 'Teresa Teng',
    img: 'assets/cover/TeresaTeng.jpeg',
    isFavorite: false,
  },
  {
    url: 'assets/audioFile/Shang_Hai_Tan_by_Francis_Yip.mp3',
    name: 'Shang Hai Tan',
    artist: 'Francis Yip',
    img: 'assets/cover/FrancisYip.jpeg',
    isFavorite: false,
  },
  {
    url: 'assets/audioFile/Small_Town_Story_by_Tsai_Chin.mp3',
    name: 'Small Town Story',
    artist: 'Tsai Chin',
    img: 'assets/cover/TsaiChin.jpeg',
    isFavorite: false,
  },
  {
    url: 'assets/audioFile/Take_Me_Home_Country_Roads_by_John_Denver.mp3',
    name: 'Take Me Home Country Roads',
    artist: 'John Denver',
    img: 'assets/cover/JohnDenver.jpeg',
    isFavorite: false,
  },
  {
    url: 'assets/audioFile/Eternal_Flame_by_The_Bangles.mp3',
    name: 'Eternal Flame',
    artist: 'The Bangles',
    img: 'assets/cover/TheBangles.jpeg',
    isFavorite: false,
  },
  {
    url: 'assets/audioFile/They_Long_to_Be_Close_to_You_by_Dusty_Springfield.mp3  ',
    name: 'They Long to be Close to You',
    artist: 'Dusty Springfield',
    img: 'assets/cover/DustySpringfield.jpeg',
    isFavorite: false,
  },
  {
    url: 'assets/audioFile/Please_Mr_Postman_by_The_Carpenters.mp3',
    name: 'Please Mr Postman',
    artist: 'The Carpenters',
    img: 'assets/cover/TheCarpenters.jpeg',
    isFavorite: false,
  },
  {
    url: 'assets/audioFile/Billy_Jean_by_Michael_Jackson.mp3',
    name: 'Billy Jean',
    artist: 'Michael Jackson',
    img: 'assets/cover/MichaelJackson.jpeg',
    isFavorite: false,
  },
];

export interface TrackMetaData {
  url: string;
  name: string;
  artist: string;
  img: string;
  isFavorite: boolean;
}

