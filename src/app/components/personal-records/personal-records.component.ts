import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, OnChanges, Output, SimpleChanges} from '@angular/core';
import {OverlayModule} from '../overlay/overlay.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ButtonModule} from '../button/button.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PersonalRecord, PersonalRecordsChange} from '../../app.models';

@Component({
  selector: 'nj-personal-records[items]',
  templateUrl: './personal-records.component.html',
  styleUrls: ['./personal-records.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalRecordsComponent implements OnChanges {

  @Input() items: PersonalRecord[];

  @Output() personalRecordsChanged = new EventEmitter<PersonalRecordsChange>();

  isAddPersonalRecordFormVisible = false;

  isEditPersonalRecordFormVisible = false;

  personalRecord: PersonalRecordsChange;

  distinctSetsReps: string[];

  onPersonalRecordClick(personalRecordItem: PersonalRecord, setsReps: string): void {
    this.personalRecord = {
      exercise: personalRecordItem.exercise,
      setsAndReps: setsReps,
      record: personalRecordItem.records[setsReps]
    };
    this.isEditPersonalRecordFormVisible = true;
  }

  onSubmit(): void {
    this.personalRecordsChanged.emit(this.personalRecord);
    this.isEditPersonalRecordFormVisible = false;
  }

  onNewPersonalRecordSubmit(personalRecord): void {
    this.personalRecordsChanged.emit({
      exercise: personalRecord.lift,
      setsAndReps: personalRecord.sets + 'x' + personalRecord.reps,
      record: personalRecord.weight
    });
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.distinctSetsReps = [...new Set([].concat(...this.items.map(item => Object.keys(item.records))))];
  }

}

@NgModule({
  imports: [BrowserAnimationsModule, CommonModule, FormsModule, OverlayModule, ButtonModule],
  exports: [PersonalRecordsComponent],
  declarations: [PersonalRecordsComponent]
})
export class PersonalRecordsModule { }
