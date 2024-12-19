import CardDTO from './CardDTO';

export default interface CardDataContainer {
  limit: number;
  total: number;
  offset: number;
  results: CardDTO[];
}
