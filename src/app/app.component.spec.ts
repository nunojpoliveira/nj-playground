import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MockComponents} from 'ng-mocks';
import {ButtonComponent} from './components/button/button.component';
import {ContextMenuComponent} from './components/context-menu/context-menu.component';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState} from './store/app.state';
import {PersonalRecordsComponent} from './components/personal-records/personal-records.component';
import {Store} from '@ngrx/store';
import {cold} from 'jasmine-marbles';
import {loadPersonalRecords, setPersonalRecordChange} from './store/app.actions';
import {PersonalRecordChange} from './app.models';

describe('AppComponent', () => {

  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockComponents(ButtonComponent, ContextMenuComponent, PersonalRecordsComponent),
      ],
      providers: [
        provideMockStore({ initialState: { app: initialState } })
      ]
    }).compileComponents();

    store = TestBed.inject(Store);

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;

    fixture.detectChanges();
  });

  it(`should have as title 'nj-playground'`, () => {
    expect(appComponent.title).toEqual('nj-playground');
  });

  it('should initialize all dependencies', () => {
    expect(appComponent.personalRecords$).toBeObservable(cold('a', { a: [] }));
  });

  it('#ngOnInit should init', () => {
    spyOn(store, 'dispatch');

    appComponent.ngOnInit();

    expect(store.dispatch).toHaveBeenCalledWith(loadPersonalRecords());
  });

  it('#onPersonalRecordChanged should change personal record', () => {
    spyOn(store, 'dispatch');

    const change: PersonalRecordChange = {
      exercise: 'exercise1',
      setsReps: '3x12',
      record: 30
    };

    appComponent.onPersonalRecordChanged(change);

    expect(store.dispatch).toHaveBeenCalledWith(setPersonalRecordChange({ change }));
  });
});
