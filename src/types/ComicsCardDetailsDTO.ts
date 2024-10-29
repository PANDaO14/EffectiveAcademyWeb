import CardDTO from './CardDTO';

export default interface ComicsCardDetailsDTO extends CardDTO {
  charactersId: number[];
}
