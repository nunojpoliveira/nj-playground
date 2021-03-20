import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonalRecordFormComponent } from './add-personal-record-form.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

describe('AddPersonalRecordFormComponent', () => {
  let component: AddPersonalRecordFormComponent;
  let fixture: ComponentFixture<AddPersonalRecordFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ AddPersonalRecordFormComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddPersonalRecordFormComponent);
    component = fixture.componentInstance;

    component.form = new FormBuilder().group({
      lift: 'exercise1',
      sets: 3,
      reps: 12,
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
