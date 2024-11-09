import { observable, makeObservable, action, computed } from 'mobx';

class PaginationStore {
  @observable
  total: number = 0;

  @observable
  limit: number = 0;

  @observable
  currentPage: number = 1;

  constructor() {
    makeObservable(this);
  }

  @computed
  get totalPages() {
    return Math.ceil(this.total / this.limit);
  }

  @computed
  get offset() {
    return (this.currentPage - 1) * this.limit;
  }

  @action
  setPagination = (total: number, limit: number) => {
    this.total = total;
    this.limit = limit;
  };

  @action
  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }

  @action
  reset = () => {
    this.total = 0;
    this.limit = 0;
    this.currentPage = 1;
  };
}

const paginationStore = new PaginationStore();

export default paginationStore;
