import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {PersonalRecordChange} from '../../../app.models';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-personal-record-form',
  templateUrl: './add-personal-record-form.component.html',
  styleUrls: ['./add-personal-record-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPersonalRecordFormComponent {

  @Output() formSubmit = new EventEmitter<PersonalRecordChange>();

  form = new FormGroup({
    lift: new FormControl('', Validators.required),
    sets: new FormControl(null, Validators.required),
    reps: new FormControl(null, Validators.required),
    weight: new FormControl(null, Validators.required)
  });

  onSubmit(): void {
    this.formSubmit.emit({
      exercise: this.form.value.lift,
      setsReps: this.form.value.sets + 'x' + this.form.value.reps,
      record: this.form.value.weight
    });
  }
}
