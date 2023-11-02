export interface IdewormingReject {
  message: string;
}

export interface IdewormingProcedure {
  id: number;
  date: string;
  medicineId: number;
  medicineBatchNumber: string;
  isPeriodical: boolean;
  periodDays: number;
}
