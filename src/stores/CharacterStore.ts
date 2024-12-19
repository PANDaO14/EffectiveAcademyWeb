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
    offset: number,
    nameStartsWith?: string
  ): Promise<void> => {
    try {
      this.loading = true;

      const { limit, total, results } = await api.characters.getCharactersList(
        offset,
        nameStartsWith
      );

      runInAction(() => {
        if (offset === 0) {
          this.characters = results;
        } else {
          this.characters = [...this.characters, ...results];
        }
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

  @action
  clearCharacters() {
    this.characters = [];
    this.total = 0;
  }

  @action
  reset() {
    this.character = null;
  }
}

const characterStore = new CharacterStore();

export default characterStore;
