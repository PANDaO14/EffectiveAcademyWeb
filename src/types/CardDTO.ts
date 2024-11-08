export default interface CardDTO {
  id: number;
  name: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
