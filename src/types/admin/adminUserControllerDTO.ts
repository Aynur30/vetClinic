interface IUserControllerGet {
  id: number;
  email: string;
  role: string;
  password: string;
  profile: {
    avatarUrl: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    discordId: string;
    telegramId: string;
    discordNotify: boolean;
    emailNotify: boolean
  }
}

interface IUserControllerPut {
  avatarUrl: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  discordId: string;
  telegramId: string;
  discordNotify: boolean;
  emailNotify: boolean;
  email: string;
  role: string;
  password: string
}

export type IUserController = IUserControllerPut | IUserControllerGet;
