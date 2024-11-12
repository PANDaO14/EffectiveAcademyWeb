import { observable, makeObservable, action, runInAction } from 'mobx';
import { toast } from 'react-toastify';

// Api
import api from 'api/index';

// Types
import CardDTO from 'types/CardDTO';
import CharacterCardDetailsDTO from 'types/CharacterCardDetailsDTO';

class CharacterStore {
  @observable
  characters: CardDTO[] = [];

  @observable
  character: CharacterCardDetailsDTO | null = null;

  @observable
  loading: boolean = false;

  @observable
  total: number = 0;

  @observable
  limit: number = 0;

  constructor() {
    makeObservable(this);
  }

  @action
  getCharactersList = async (
    offsetValue: number,
    nameStartsWith?: string
  ): Promise<void> => {
    try {
      this.loading = true;

      const { limit, total, results } = await api.characters.getCharactersList(
        offsetValue,
        nameStartsWith
      );

      runInAction(() => {
        this.characters = results;
        this.total = total;
        this.limit = limit;
      });
    } catch (error) {
      toast.error(`Ошибка ${error}`);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action
  getCharacter = async (id: number): Promise<void> => {
    try {
      this.loading = true;

      const character = await api.characters.getCharacter(id);

      runInAction(() => {
        this.character = character;
      });
    } catch (error) {
      toast.error(`Ошибка ${error}`);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const characterStore = new CharacterStore();

export default characterStore;
