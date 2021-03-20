import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRecordsTableComponent } from './personal-records-table.component';
import {MockPipe} from 'ng-mocks';
import {DistinctSetsRepsPipe} from '../distinct-sets-reps/distinct-sets-reps.pipe';
import {PersonalRecord, PersonalRecordChange} from '../../../app.models';

describe('PersonalRecordsTableComponent', () => {
  let component: PersonalRecordsTableComponent;
  let fixture: ComponentFixture<PersonalRecordsTableComponent>;

  const personalRecordsMock: PersonalRecord[] = [
    {
      id: 1,
      exercise: 'exercise1',
      records: {
        '3x12': 50,
        '5x5': 75
      }
    },
    {
      id: 1,
      exercise: 'exercise2',
      records: {
        '3x12': 50
      }
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalRecordsTableComponent, MockPipe(DistinctSetsRepsPipe, jasmine.createSpy('transform').and.callFake((_) => ['3x12', '5x5'])) ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersonalRecordsTableComponent);
    component = fixture.componentInstance;

    component.personalRecords = personalRecordsMock;

    fixture.detectChanges();
  });

  it('should generate the table with the correct data', () => {
    const headers = fixture.debugElement.nativeElement.querySelectorAll('th');
    const firstRowCells = fixture.debugElement.nativeElement.querySelectorAll('.data-row')[0].querySelectorAll('td');
    const secondRowCells = fixture.debugElement.nativeElement.querySelectorAll('.data-row')[1].querySelectorAll('td');

    expect(headers[0].textContent).toEqual('Lift');
    expect(headers[1].textContent).toEqual('3x12');
    expect(headers[2].textContent).toEqual('5x5');

    expect(firstRowCells[0].textContent).toEqual('exercise1');
    expect(firstRowCells[1].textContent).toEqual('50');
    expect(firstRowCells[2].textContent).toEqual('75');

    expect(secondRowCells[0].textContent).toEqual('exercise2');
    expect(secondRowCells[1].textContent).toEqual('50');
    expect(secondRowCells[2].textContent).toEqual('Insert');
  });

  it('clicking on a personal record should set isFormVisible to true', () => {
    const personalRecordCell = fixture.debugElement.nativeElement.querySelectorAll('.data-row')[0].querySelectorAll('td')[1];

    personalRecordCell.click();

    expect(component.isEditFormVisible).toBe(true);
  });

  it('#onPersonalRecordClick should set personalRecordChange, and open the form', () => {
    const clickedPersonalRecord: PersonalRecord = {
      id: 1,
      exercise: 'exercise1',
      records: {
        '3x12': 50,
        '5x5': 75
      }
    };
    component.onPersonalRecordClick(clickedPersonalRecord, '3x12');

    expect(component.personalRecordToEdit).toEqual({
      exercise: 'exercise1',
      setsReps: '3x12',
      record: 50
    });
    expect(component.isEditFormVisible).toBe(true);
  });

  it('#onSubmit should emit event, and close the form', () => {
    const spy = spyOn(component.personalRecordChanged, 'emit');

    const personalRecordToEdit: PersonalRecordChange = {
      exercise: 'exercise1',
      setsReps: '3x12',
      record: 50
    };

    component.personalRecordToEdit = personalRecordToEdit;

    component.onEditSubmit(personalRecordToEdit);

    expect(spy).toHaveBeenCalledWith(personalRecordToEdit);
    expect(component.isEditFormVisible).toBe(false);
  });
});
