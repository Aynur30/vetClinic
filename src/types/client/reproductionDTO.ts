interface IReproductionPut {
  estrusStart: string;
  mating: string;
  dueDate: string;
  childCount: number;
}

interface IReproductionGet {
  id: number;
  estrusStart: string;
  mating: string;
  dueDate: string;
  childCount: number;
}

export type IReproduction = IReproductionPut | IReproductionGet;
