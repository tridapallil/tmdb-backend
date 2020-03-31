/* eslint-disable camelcase */

export interface IListParamsBase {
  page: number;
  language: string;
}

export interface ITMDBGenre {
  id: number;
  name: string;
}

export interface ITMDBMovie {
  id: number;
  genre_ids: number[];
  genres: ITMDBGenre[];
  popularity: number;
  poster_path: string;
  title: string;
  original_title: string;
  release_date: string;
}

export interface ITMDBMovieDetails extends ITMDBMovie {
  overview: string;
}

export interface ITMDBMovieList {
  total_pages: number;
  page: number;
  total_results: number;
  results: ITMDBMovie[];
}
