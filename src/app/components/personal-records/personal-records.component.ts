import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import {OverlayModule} from '../overlay/overlay.component';
import {ButtonModule} from '../button/button.component';
import {PersonalRecord, PersonalRecordChange} from '../../app.models';
import {DistinctSetsRepsPipe} from './distinct-sets-reps.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'nj-personal-records[items]',
  templateUrl: './personal-records.component.html',
  styleUrls: ['./personal-records.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalRecordsComponent {

  @Input() items: PersonalRecord[];

  @Output() personalRecordChanged = new EventEmitter<PersonalRecordChange>();

  isFormVisible = false;

  change: PersonalRecordChange;

  onPersonalRecordClick(personalRecordItem: PersonalRecord, setsReps: string): void {
    this.change = {
      exercise: personalRecordItem.exercise,
      setsReps,
      record: personalRecordItem.records[setsReps]
    };
    this.isFormVisible = true;
  }

  onSubmit(): void {
    this.personalRecordChanged.emit(this.change);
    this.isFormVisible = false;
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, OverlayModule, ButtonModule],
  exports: [PersonalRecordsComponent],
  declarations: [DistinctSetsRepsPipe, PersonalRecordsComponent]
})
export class PersonalRecordsModule { }
