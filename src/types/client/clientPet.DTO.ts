export interface IClientPetResponse {
  id: number;
  name: string;
  avatar: string | null;
  birthDay: string;
  petType: string;
}

export interface IClientPetRequest {
    name: string,
    avatar: string,
    birthDay: Date,
    petType: string,
    breed: string,
    gender: string,
    color: string,
    size: string,
    weight: number,
    description: string
}
