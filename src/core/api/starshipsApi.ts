import { Starship } from '../types/starship.type';
import { instance } from './axios';

export const getStarships = async (urls: string[]): Promise<Starship[]> => {
  try {
    const starshipPromises = urls.map((url) => instance.get(url));
    const starshipsResponses = await Promise.all(starshipPromises);
    return starshipsResponses.map((response) => response.data);
  } catch (error) {
    console.error('Failed to fetch starships', error);
    throw error;
  }
};
