export interface PersonalRecord {
  id: number;
  exercise: string;
  records: { [setsAndReps: string]: number };
}

export interface PersonalRecordChange {
  exercise: string;
  setsReps: string;
  record: number;
}
