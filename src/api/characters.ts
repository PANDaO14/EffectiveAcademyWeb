import axios from 'axios';

// Types
import CardDTO from 'types/CardDTO';
import CharacterCardDetailsDTO from 'types/CharacterCardDetailsDTO';

// Config
import envs from 'config/enviroments';

export default {
  async getCharactersList(): Promise<CardDTO[]> {
    const response = await axios.get(
      `/api/v1/public/characters?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}&limit=${envs.limit}`
    );

    return response.data.data.results;
  },

  async getCharacter(characterId: number): Promise<CharacterCardDetailsDTO> {
    const response = await axios.get(
      `/api/v1/public/characters/${characterId}?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}`
    );

    return response.data.data.results[0];
  }
};
