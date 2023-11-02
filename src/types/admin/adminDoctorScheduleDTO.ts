export interface ISchedule {
    id: number;
    doctorId: number;
    workShift: string;
    startWeek: string;
}

export interface ISchedulePostRequest {
    doctorId: number;
    workShift: string;
    startWeek: string;
}

export interface ISchedulePutRequest {
    workShift: string;
}
