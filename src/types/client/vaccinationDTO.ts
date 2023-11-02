export interface IVaccinationResponse {
    id: number;
    date: string;
    medicineId: number;
    medicineBatchNumber: string;
    isPeriodical: boolean;
    periodDays: number;
}

export interface IVaccinationPostRequest {
    date: string;
    medicineId: number;
    medicineBatchNumber: string;
    isPeriodical: boolean;
    periodDays: number;
}

export interface IVaccinationPutRequest {
    id: number;
    date: string;
    medicineId: number;
    medicineBatchNumber: string;
    isPeriodical: boolean;
    periodDays: number;
}
