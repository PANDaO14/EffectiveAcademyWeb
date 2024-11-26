import { action, makeObservable, observable } from 'mobx';
import CardDTO from 'types/CardDTO';

class FavouriteStore {
  @observable
  favourites: CardDTO[] = [];

  constructor() {
    makeObservable(this);
    this.loadFavourites();
  }

  @action
  loadFavourites() {
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
      this.favourites = JSON.parse(savedFavourites);
    }
  }

  @action
  saveToLocalStorage() {
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
  }

  @action
  toggleFavorite(card: CardDTO) {
    const index = this.favourites.findIndex((fav) => fav.id === card.id);

    if (index === -1) {
      this.favourites.push(card);
    } else {
      this.favourites.splice(index, 1);
    }

    this.saveToLocalStorage();
  }

  @action
  isFavourite(id: number) {
    return this.favourites.some((fav) => fav.id === id);
  }
}

const favouriteStore = new FavouriteStore();
export default favouriteStore;
