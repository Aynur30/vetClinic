export interface IPet {
    id: number;
    name: string;
    avatar: string;
    birthDay: string;
    petType: string;
}
    
export interface IClientInfo {
    firstname: string;
    lastname: string;
    avatar: string;
    email: string;
    pets: IPet[];
}

export interface IAvatar {
    [index: number]: string;
}

export interface IAvatarResponse {
    filename: string;
    url: string;
}


   
  