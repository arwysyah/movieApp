export interface IStateData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [string];
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
}
export enum Stacks {
  home = 'Home',
  details = 'Details',
  splashScreen = 'SplashScreen',
  BottomNavigation = 'BottomNavigation',
  movie = 'Movie',
}
export type RootStackParamList = {
  Home: undefined;
  Details: {item: IStateData};
  SplashScreen: undefined;

  BottomNavigation: undefined;
  Movies: undefined;
};

export interface Genres {
  id: number;
  name: string;
}

export interface ProductionCompany {
  name: string;
  id: number;
  logo_path: string;
}
export interface IMoviesData {
  adult: boolean;
  backdrop_path: string;
  genres: [Genres];
  homepage: string | null;
  original_name: string;
  overview: string;
  poster_path: string;
  popularity: number;
  prodiction_companies: [ProductionCompany];
  relese_date: string;
  runtime: number;
}
