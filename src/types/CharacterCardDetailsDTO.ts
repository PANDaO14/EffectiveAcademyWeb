import CardDTO from './CardDTO';

export default interface CharacterCardDetailsDTO extends CardDTO {
  comics: {
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
}
