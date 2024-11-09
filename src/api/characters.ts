import axios from 'axios';

// Types
import CharacterCardDetailsDTO from 'types/CharacterCardDetailsDTO';
import CardDataContainer from 'types/CardDataContainer';

// Config
import envs from 'config/enviroments';

export default {
  async getCharactersList(offset: number): Promise<CardDataContainer> {
    const response = await axios.get(
      `/api/v1/public/characters?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}&limit=${envs.limit}&offset=${offset}`
    );

    return response.data.data;
  },

  async getCharacter(characterId: number): Promise<CharacterCardDetailsDTO> {
    const response = await axios.get(
      `/api/v1/public/characters/${characterId}?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}`
    );

    return response.data.data.results[0];
  }
};
