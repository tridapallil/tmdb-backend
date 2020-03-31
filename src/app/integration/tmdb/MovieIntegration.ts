import api from '../../services/api';

import { ITMDBMovie, ITMDBMovieDetails, ITMDBGenre } from './Types';

import Reflection from './Reflection';

import { AxiosResponse } from 'axios';

export default {
  async upcoming(page: number) {
    const apiResponse = await api.get<ITMDBMovie>('movie/upcoming', {
      params: { page },
    }).then((response: AxiosResponse) => response).catch((error) => error);

    const genres = await api.get<ITMDBGenre>('genre/movie/list').then((response: AxiosResponse) => response).catch((error) => error);

    const movies = Reflection.reflectMovieList(apiResponse.data, genres.data.genres);

    return movies;
  },

  async search(page: number, name: string) {
    const apiResponse = await api.get<ITMDBMovie>('search/movie', {
      params: {
        page,
        query: name,
      },
    }).then((response: AxiosResponse) => response).catch((error) => error);

    const genres = await api.get<ITMDBGenre>('genre/movie/list').then((response: AxiosResponse) => response).catch((error) => error);

    const movies = Reflection.reflectMovieList(apiResponse.data, genres.data.genres);

    return movies;
  },

  async details(id: number) {
    const apiResponse = await api.get<ITMDBMovieDetails>(`movie/${id}`).then((response: AxiosResponse) => response).catch((error) => error);

    const movie = Reflection.reflectMovieDetail(apiResponse.data);

    return movie;
  },
};
