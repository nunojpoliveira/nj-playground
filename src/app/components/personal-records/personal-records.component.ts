import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import {OverlayModule} from '../overlay/overlay.component';
import {ButtonModule} from '../button/button.component';
import {PersonalRecord, PersonalRecordChange} from '../../app.models';
import {DistinctSetsRepsPipe} from './distinct-sets-reps/distinct-sets-reps.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditPersonalRecordFormComponent} from './edit-personal-record-form/edit-personal-record-form.component';
import {AddPersonalRecordFormComponent} from './add-personal-record-form/add-personal-record-form.component';
import {PersonalRecordsTableComponent} from './personal-records-table/personal-records-table.component';

@Component({
  selector: 'nj-personal-records[items]',
  templateUrl: './personal-records.component.html',
  styleUrls: ['./personal-records.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalRecordsComponent {

  @Input() items: PersonalRecord[];

  @Output() personalRecordChanged = new EventEmitter<PersonalRecordChange>();

  isAddFormVisible = false;

  onAddSubmit(personalRecordChange: PersonalRecordChange): void {
    this.personalRecordChanged.emit(personalRecordChange);
    this.isAddFormVisible = false;
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OverlayModule, ButtonModule],
  exports: [PersonalRecordsComponent],
  declarations: [AddPersonalRecordFormComponent, DistinctSetsRepsPipe, EditPersonalRecordFormComponent, PersonalRecordsComponent,
    PersonalRecordsTableComponent]
})
export class PersonalRecordsModule { }
