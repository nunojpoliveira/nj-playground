import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRecordsComponent } from './personal-records.component';
import {MockComponent, MockPipe} from 'ng-mocks';
import {DistinctSetsRepsPipe} from './distinct-sets-reps.pipe';
import {OverlayComponent} from '../overlay/overlay.component';
import {PersonalRecord, PersonalRecordChange} from '../../app.models';

describe('PersonalRecordsComponent', () => {
  let component: PersonalRecordsComponent;
  let fixture: ComponentFixture<PersonalRecordsComponent>;

  const distinctSetsRepsPipeSpy = jasmine.createSpy('transform').and.callFake((_) => ['3x12', '5x5']);

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
      declarations: [ PersonalRecordsComponent, MockComponent(OverlayComponent), MockPipe(DistinctSetsRepsPipe, distinctSetsRepsPipeSpy) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalRecordsComponent);
    component = fixture.componentInstance;
    component.items = personalRecordsMock;
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

    expect(component.isFormVisible).toBe(true);
  });

  it('should call DistinctSetsRepsPipe once', () => {
    expect(distinctSetsRepsPipeSpy).toHaveBeenCalledWith(personalRecordsMock);
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

    expect(component.change).toEqual({
      exercise: 'exercise1',
      setsReps: '3x12',
      record: 50
    });
    expect(component.isFormVisible).toBe(true);
  });

  it('#onSubmit should emit event, and close the form', () => {
    const spy = spyOn(component.personalRecordChanged, 'emit');

    const change: PersonalRecordChange = {
      exercise: 'exercise1',
      setsReps: '3x12',
      record: 50
    };

    component.change = change;

    component.onSubmit();

    expect(spy).toHaveBeenCalledWith(change);
    expect(component.isFormVisible).toBe(false);
  });
});
