import CardDTO from './CardDTO';

export default interface ComicsCardDetailsDTO extends CardDTO {
  characters: {
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
}
