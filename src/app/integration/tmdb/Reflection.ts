/* eslint-disable camelcase */
import {
 IMovie, IMovieDetail, IMovieList,
} from '../../modules/movie/Types';

import {
 ITMDBMovie, ITMDBMovieDetails, ITMDBGenre, ITMDBMovieList,
} from './Types';

export default {
  reflectMovieDetail(movie: ITMDBMovieDetails): IMovieDetail {
    const {
      id,
      original_title: name,
      poster_path: poster,
      genres,
      release_date,
      overview,
    } = movie;
    return {
      id,
      name,
      poster,
      genres,
      release_date,
      overview: overview!,
    };
  },

  reflectMovie(movie: ITMDBMovie, genreList: ITMDBGenre[]): IMovie {
    const {
      id,
      original_title: name,
      poster_path: poster,
      genre_ids,
      release_date,
    } = movie;

    const genres: any = [];
    genreList.map((row: any) => (
      (genre_ids.indexOf(row.id) !== -1) && (genres.push(row.name))
    ));

    return {
      id, name, poster, genres, release_date,
    };
  },

  reflectMovieList(movies: ITMDBMovieList, genreList: ITMDBGenre[]): IMovieList {
    const {
      results,
      total_pages,
      total_results,
      page,
    } = movies;
    const resultsMovies = results.reduce(
      (prev: IMovie[], curr: ITMDBMovie) => [...prev, this.reflectMovie(curr, genreList)],
      [],
    );
    return {
      results: resultsMovies,
      total_pages,
      page,
      total_results,
    };
  },
};
