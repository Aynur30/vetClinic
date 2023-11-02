export interface IAppointmentData {
  doctorId: number;
  date: string;
}

export interface LocalTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface IAppointmentDay {
  time: LocalTime;
  available: boolean;
}

export interface IAppointments {
  date: string;
  appointments: IAppointmentDay[];
}

export interface IAppointmentResponse {
  days: IAppointments[];
}