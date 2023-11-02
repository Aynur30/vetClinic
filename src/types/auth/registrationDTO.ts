export interface IPet {
  id: number;
  name: string;
  avatar: string;
  birthDay: string;
  petType: string;
}
  
export interface IUserInfo {
  firstname: string;
  lastname: string;
  avatar: string;
  email: string;
  pets: IPet[];
}
 
export interface IUserRegistration {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  confirmPassword: string;
  }
export interface IRegistrationResponse {
  code: string;
  message: string;
}  