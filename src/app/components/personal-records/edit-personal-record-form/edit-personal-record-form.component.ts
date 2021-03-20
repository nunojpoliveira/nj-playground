import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {PersonalRecordChange} from '../../../app.models';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'pr-edit-personal-record-form',
  templateUrl: './edit-personal-record-form.component.html',
  styleUrls: ['./edit-personal-record-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPersonalRecordFormComponent {

  @Input() personalRecordToEdit: PersonalRecordChange;

  @Output() formSubmit = new EventEmitter<PersonalRecordChange>();

  form = new FormGroup({
    weight: new FormControl(null, Validators.required)
  });

  onSubmit(): void {
    this.formSubmit.emit({
      exercise: this.personalRecordToEdit.exercise,
      setsReps: this.personalRecordToEdit.setsReps,
      record: this.form.value.weight
    });
  }
}
