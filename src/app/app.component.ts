import { Component } from '@angular/core';
import { ContextMenuItem } from './components/context-menu/context-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nj-playground';

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
}
