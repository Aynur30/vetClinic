export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  DOCTOR = 'DOCTOR',
  CLIENT = 'CLIENT',
  UNVERIFIED_CLIENT = 'UNVERIFIED_CLIENT',
}

export interface IUser {
  username: string;
  password: string;
}

export interface IUserResponce {
  jwtToken: string;
  role: UserRole | string | null;
}
