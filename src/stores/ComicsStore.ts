import { observable, makeObservable, action, runInAction } from 'mobx';
import { toast } from 'react-toastify';

// Api
import api from 'api/index';

// Types
import CardDTO from 'types/CardDTO';
import ComicsCardDetailsDTO from 'types/ComicsCardDetailsDTO';

class ComicsStore {
  @observable
  AllComics: CardDTO[] = [];

  @observable
  comics: ComicsCardDetailsDTO | null = null;

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
  getComicsList = async (
    offset: number,
    nameStartsWith?: string
  ): Promise<void> => {
    try {
      this.loading = true;

      const { limit, total, results } = await api.comics.getComicsList(
        offset,
        nameStartsWith
      );

      runInAction(() => {
        if (offset === 0) {
          this.AllComics = results;
        } else {
          this.AllComics = [...this.AllComics, ...results];
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
  getComics = async (id: number): Promise<void> => {
    try {
      this.loading = true;

      const comics = await api.comics.getComics(id);

      runInAction(() => {
        this.comics = comics;
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
  clearComics() {
    this.AllComics = [];
    this.total = 0;
  }

  @action
  reset() {
    this.comics = null;
  }
}

const comicsStore = new ComicsStore();

export default comicsStore;
