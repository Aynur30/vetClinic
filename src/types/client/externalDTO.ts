export interface IExternalRecord {
  id: number;
  date: string;
  type: string;
  medicineId: number;
  medicineBatchNumber: string;
  isPeriodical: boolean;
  periodDays: number;
}

export interface IExternalReject {
  message: string;
}
