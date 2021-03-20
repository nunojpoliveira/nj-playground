import { ComponentFixture, TestBed } from '@angular/core/testing';

import {PersonalRecordsComponent} from './personal-records.component';
import {MockComponents} from 'ng-mocks';
import {OverlayComponent} from '../overlay/overlay.component';
import {PersonalRecordChange} from '../../app.models';
import {ButtonComponent} from '../button/button.component';
import {PersonalRecordsTableComponent} from './personal-records-table/personal-records-table.component';
import {AddPersonalRecordFormComponent} from './add-personal-record-form/add-personal-record-form.component';

describe('PersonalRecordsComponent', () => {
  let component: PersonalRecordsComponent;
  let fixture: ComponentFixture<PersonalRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PersonalRecordsComponent,
        MockComponents(AddPersonalRecordFormComponent, ButtonComponent, OverlayComponent, PersonalRecordsTableComponent)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set isFormVisible to false when clicking the Add Personal Record button', () => {
    const addPersonalRecordButton = fixture.debugElement.nativeElement.querySelector('nj-button');

    addPersonalRecordButton.click();

    expect(component.isAddFormVisible).toBe(true);
  });

  it('#onAddSubmit should emit event and close Add Personal Record form', () => {
    const emitSpy = spyOn(component.personalRecordChanged, 'emit');
    const personalRecordChange: PersonalRecordChange = {
      exercise: 'exercise1',
      setsReps: '3x12',
      record: 50
    };

    component.onAddSubmit(personalRecordChange);

    expect(emitSpy).toHaveBeenCalledWith(personalRecordChange);
    expect(component.isAddFormVisible).toBe(false);
  });
});
