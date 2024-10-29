import ComicsCardDetailsDTO from '../../types/ComicsCardDetailsDTO';

const comicsData: ComicsCardDetailsDTO[] = [
  {
    id: 0,
    img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/a0/66c72272de57a/clean.jpg',
    title: 'UNCANNY X-MEN (2024) #6',
    description:
      "It's BACK TO SCHOOL for four young mutants... ...But is a rural school in Louisiana READY for this crew? Bullies, terrible lunches and classroom flirting abound...but IS one of the student body the prophesied ENDLING, who will be the last member of mutantkind? Plus - Jubilee undertakes a fateful solo mission!",
    charactersId: [1, 2, 4, 5]
  },
  {
    id: 1,
    img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/30/66c7225e20a8c/clean.jpg',
    title: 'UNCANNY X-MEN (2024) #5',
    description:
      'The brutal conclusion to the RED WAVE storyline is here! The Uncanny X-MEN face an unstoppable force of evil and death who reveals a shocking secret...but they may not survive long enough to face it! Will the next generation of young mutants stand by Rogue and her team or join the other side?',
    charactersId: [0, 2, 3, 6]
  },
  {
    id: 2,
    img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/a/20/6615419048410/clean.jpg',
    title: 'RESURRECTION OF MAGNETO (2024) #4',
    description:
      'RETURN OF THE KING! The Master of Magnetism has returned to the world…but it is not the world he left. Nor is Magneto the same man who left it. Has death changed him for the better, or for the worse? And when he sees what ORCHIS has done to mutantkind…will it change him again?',
    charactersId: [1, 4, 5, 7]
  },
  {
    id: 3,
    img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/66d08252187fd/clean.jpg',
    title: 'UNCANNY X-MEN: FACSIMILE EDITION (2024) #274',
    description:
      "Sparks fly in the Savage Land - between Rogue and Magneto! The powerhouse X-Man joins forces with their greatest enemy, but could there be something more between them than a mere alliance? They'll fight alongside Ka-Zar and Zabu against the wicked Zaladane, who has erected six towers in the Savage Land and is now in sync with Earth's magnetic field. With her newfound power, she has scrambled all communication in the area - and the effects of her mad quest are already felt far away! The epic battle features dinosaurs, Mutates, Nick Fury - and Rogue in her iconic Savage Land ensemble, courtesy of superstar artist Jim Lee! It's one of the all-time great Marvel comic books, boldly re-presented in its original form, ads and all! Reprinting UNCANNY X-MEN (1981) #274.",
    charactersId: [0, 3, 6, 8]
  }
];

export default comicsData;
