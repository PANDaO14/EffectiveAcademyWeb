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

  constructor() {
    makeObservable(this);
  }

  @action
  getComicsList = async (): Promise<void> => {
    try {
      this.loading = true;

      const comics = await api.comics.getComicsList();

      runInAction(() => {
        this.AllComics = comics;
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
      console.log(comics);

      runInAction(() => {
        this.comics = comics;
        console.log(this.comics);
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

const comicsStore = new ComicsStore();

export default comicsStore;
