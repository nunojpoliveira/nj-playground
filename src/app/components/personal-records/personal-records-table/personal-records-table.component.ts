import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {PersonalRecord, PersonalRecordChange} from '../../../app.models';

@Component({
  selector: 'pr-personal-records-table',
  templateUrl: './personal-records-table.component.html',
  styleUrls: ['./personal-records-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalRecordsTableComponent {

  @Input() personalRecords: PersonalRecord[];

  @Output() personalRecordChanged = new EventEmitter<PersonalRecordChange>();

  isEditFormVisible = false;

  personalRecordToEdit: PersonalRecordChange;

  onPersonalRecordClick(personalRecordItem: PersonalRecord, setsReps: string): void {
    this.personalRecordToEdit = {
      exercise: personalRecordItem.exercise,
      setsReps,
      record: personalRecordItem.records[setsReps]
    };
    this.isEditFormVisible = true;
  }

  onEditSubmit(personalRecordChange: PersonalRecordChange): void {
    this.personalRecordChanged.emit(personalRecordChange);
    this.isEditFormVisible = false;
  }
}
