import MovieIntegration from '../integration/tmdb/MovieIntegration';

import { Request, Response } from 'express';

export default {
  async list(req: Request, res: Response) {
    const { search, page } = req.query;
    if (search) {
      try {
        const movieList = await MovieIntegration.search(page, search);
        return res.json(movieList);
      } catch (error) {
        return res.json({ error: true, message: 'An error has ocurred, please review your params or try again later.' });
      }
    }

    try {
      const movieList = await MovieIntegration.upcoming(page);
      return res.json(movieList);
    } catch (error) {
      return res.json({ error: true, message: 'An error has ocurred, please review your params or try again later.' });
    }
  },

  async get(req: Request, res: Response) {
    const { id } = req.params as any;
    if (id) {
      try {
        const movie = await MovieIntegration.details(id as number);
        return res.json(movie);
      } catch (error) {
        return res.json({ error: true, message: 'An error has ocurred, please try again later.' });
      }
    }
      return res.json({ error: true, message: 'You must provide an id' });
  },
};
