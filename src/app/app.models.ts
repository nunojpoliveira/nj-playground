export interface PersonalRecord {
  id: number;
  exercise: string;
  records: { [setsAndReps: string]: number };
}
