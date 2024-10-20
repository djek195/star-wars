import { Film } from '../types/film.type';
import { instance } from './axios';

export const getFilms = async (urls: string[]): Promise<Film[]> => {
  try {
    const filmPromises = urls.map((url) => instance.get(url));
    const filmsResponses = await Promise.all(filmPromises);
    return filmsResponses.map((response) => response.data);
  } catch (error) {
    console.error('Failed to fetch films', error);
    throw error;
  }
};
