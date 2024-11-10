import axios from 'axios';

// Types
import CardDataContainer from 'types/CardDataContainer';
import ComicsCardDetailsDTO from 'types/ComicsCardDetailsDTO';

// Config
import envs from 'config/enviroments';

export default {
  async getComicsList(offset: number): Promise<CardDataContainer> {
    const response = await axios.get(
      `/api/v1/public/comics?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}&limit=${envs.limit}&offset=${offset}`
    );

    return response.data.data;
  },

  async getComicsListBySearch(
    nameStartsWith: string
  ): Promise<CardDataContainer> {
    const response = await axios.get(
      `/api/v1/public/comics?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}&limit=${envs.limit}&titleStartsWith=${nameStartsWith}`
    );

    return response.data.data;
  },

  async getComics(comicsId: number): Promise<ComicsCardDetailsDTO> {
    const response = await axios.get(
      `/api/v1/public/comics/${comicsId}?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}`
    );

    return response.data.data.results[0];
  }
};
