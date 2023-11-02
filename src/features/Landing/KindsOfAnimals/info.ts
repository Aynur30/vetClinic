import cats from "../../../assets/images/cats.png";
import dogs from "../../../assets/images/dogs.png";
import birds from "../../../assets/images/birds.png";
import rodents from "../../../assets/images/rodents.png";
import reptiles from "../../../assets/images/reptiles.png";
import rabbits from "../../../assets/images/rabbits.png";
import ferrets from "../../../assets/images/ferrets.png";

  interface ICards {
    id: number;
    kindOfAnimal: string;
    imageUrl: string;
  }

  export const kindsOfAnimalsCards: Array<ICards> = [
    {
      id: 1,
      kindOfAnimal: "Кошки",
      imageUrl: cats,
    },
    {
      id: 2,
      kindOfAnimal: "Собаки",
      imageUrl: dogs,
    },
    {
      id: 3,
      kindOfAnimal: "Птицы",
      imageUrl: birds,
    },
    {
      id: 4,
      kindOfAnimal: "Грызуны",
      imageUrl: rodents,
    },
    {
      id: 5,
      kindOfAnimal: "Рептилии",
      imageUrl: reptiles,
    },
    {
      id: 6,
      kindOfAnimal: "Кролики",
      imageUrl: rabbits,
    },
    {
      id: 7,
      kindOfAnimal: "Хорьки",
      imageUrl: ferrets,
    },
  ];