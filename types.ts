export enum Language {
  AR = 'ar',
  FR = 'fr',
  EN = 'en',
}

export interface Series {
  id: string;
  name: { [key in Language]: string };
  icon: string;
}

export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface Song {
  title: string;
  artist: string;
  src: string; // Base64 encoded data URI
}

export type MusicData = {
  [key in Language]: Song[];
};

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  totalCoins: number;
  totalScore: number;
  questionsAnswered: number;
  correctAnswers: number;
  ticTacToeWins: number;
  friends: Pick<User, 'id' | 'name' | 'avatarUrl' | 'countryCode'>[];
  friendRequests: Pick<User, 'id' | 'name' | 'avatarUrl' | 'countryCode'>[];
  countryCode?: string; // e.g., 'MA', 'FR', 'US'
}

export interface ChatMessage {
    senderId: string;
    text: string;
    timestamp: number;
}

export interface BrainstormTopic {
  id: string;
  title: { [key in Language]: string };
}

export interface BrainstormPost {
  id: string;
  topicId: string;
  author: Pick<User, 'id' | 'name' | 'avatarUrl' | 'countryCode'>;
  text: string;
  timestamp: number;
}

export interface ArtGalleryItem {
  id: string;
  seriesId: string;
  title: { [key in Language]: string };
  description: { [key in Language]: string };
  imageUrl: string;
}

export interface Gift {
  id: string;
  name: { [key in Language]: string };
  icon: string;
  price: number;
}

export enum GameState {
  Login,
  LanguageSelection,
  SplashScreen,
  SeriesSelection,
  GameModeSelection,
  TeamLobby,
  Quiz,
  Results,
  Profile,
  Chat,
  Brainstorming,
  ArtGallery,
  Registration,
  AvatarSelection,
}