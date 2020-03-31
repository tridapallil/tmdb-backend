/* eslint-disable camelcase */
import { ITMDBGenre } from '../../integration/tmdb/Types';

export interface IMovie {
  id: number;
  name: string;
  release_date: string;
  poster: string;
  genres: ITMDBGenre[];
}

export interface IMovieDetail extends IMovie {
  overview: string;
}

export interface IMovieList {
  page: number;
  total_results: number;
  total_pages: number;
  results: IMovie[];
}
