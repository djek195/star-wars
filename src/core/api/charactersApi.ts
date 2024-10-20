import { Character } from '../types/character.type';
import { instance } from './axios';

export const getCharacters = async (page: number = 1) => {
  try {
    const response = await instance.get(`/people?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch characters', error);
    throw error;
  }
};

export const getCharacterDetails = async (id: string): Promise<Character> => {
  try {
    const response = await instance.get(`/people/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `Failed to fetch details for character with id: ${id}`,
      error,
    );
    throw error;
  }
};
