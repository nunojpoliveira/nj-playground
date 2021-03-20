import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonalRecordFormComponent } from './edit-personal-record-form.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

describe('EditPersonalRecordFormComponent', () => {
  let component: EditPersonalRecordFormComponent;
  let fixture: ComponentFixture<EditPersonalRecordFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ EditPersonalRecordFormComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditPersonalRecordFormComponent);
    component = fixture.componentInstance;

    component.personalRecordToEdit = {
      exercise: 'exercise1',
      setsReps: '3x12',
      record: 50
    };

    component.form = new FormBuilder().group({
      weight: 70
    });

    fixture.detectChanges();
  });

  it('#onSubmit should emit event with the personal record change', () => {
    const spy = spyOn(component.formSubmit, 'emit');

    component.onSubmit();

    expect(spy).toHaveBeenCalledWith({
      exercise: 'exercise1',
      setsReps: '3x12',
      record: 70
    });
  });
});
