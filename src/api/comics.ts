import axios from 'axios';

// Types
import CardDTO from 'types/CardDTO';
import ComicsCardDetailsDTO from 'types/ComicsCardDetailsDTO';

// Config
import envs from 'config/enviroments';

export default {
  async getComicsList(): Promise<CardDTO[]> {
    const response = await axios.get(
      `/api/v1/public/comics?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}&limit=${envs.limit}`
    );

    return response.data.data.results;
  },

  async getComics(comicsId: number): Promise<ComicsCardDetailsDTO> {
    const response = await axios.get(
      `/api/v1/public/comics/${comicsId}?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}`
    );

    return response.data.data.results[0];
  }
};
