export enum NonWorkingType {
    VACATION = 'VACATION',
    DAY_OFF = 'DAY_OFF',
    SICK_LEAVE = 'SICK_LEAVE'
}

export interface adminDoctorNonWorkingDTO {
    doctorNonWorkingId: number,
    doctorId: number,
    type: NonWorkingType,
    date: string
}