import {Component, OnInit} from '@angular/core';
import { ContextMenuItem } from './components/context-menu/context-menu.component';
import {Store} from '@ngrx/store';
import {loadPersonalRecords} from './store/app.actions';
import {PersonalRecord} from './app.models';
import {selectPersonalRecords} from './store/app.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nj-playground';

  personalRecords$: Observable<PersonalRecord[]>;

  contextMenuActionsEx1: ContextMenuItem[] = [
    { icon: 'iwp-icon-ci_facebook', text: 'Long text placeholder' },
    { icon: 'iwp-icon-ci_youtube', text: 'Long text placeholder' },
    { icon: 'iwp-icon-ci_whatsapp', text: 'Really long text placeholder' },
    { icon: 'iwp-icon-ci_twitter', text: 'This is the longest text placeholder' },
    { icon: 'iwp-icon-ci_pinterest', text: 'Really long text placeholder' },
    { icon: 'iwp-icon-ci_linkedin', text: 'Long text placeholder' },
  ];

  contextMenuActionsEx2: ContextMenuItem[] = [
    { icon: 'iwp-icon-ci_facebook', text: 'Long text placeholder' },
    { icon: 'iwp-icon-ci_youtube', text: 'Long text placeholder' },
    { icon: 'iwp-icon-ci_whatsapp', text: 'Long text placeholder' },
  ];

  contextMenuActionsEx3: ContextMenuItem[] = [
    { icon: 'iwp-icon-ci_facebook', text: 'Long text placeholder', disabled: true },
    { icon: 'iwp-icon-ci_youtube', text: 'Long text placeholder' },
    { icon: 'iwp-icon-ci_whatsapp', text: 'Long text placeholder', disabled: true },
  ];

  constructor(private readonly store: Store) {
    this.personalRecords$ = this.store.select(selectPersonalRecords);
  }

  ngOnInit(): void {
    this.store.dispatch(loadPersonalRecords());
  }
}
