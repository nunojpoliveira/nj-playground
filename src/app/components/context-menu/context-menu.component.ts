import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

export interface ContextMenuItem {
  icon?: string;
  text: string;
  disabled?: boolean;
}

@Component({
  selector: 'nj-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {

  @Input() items: ContextMenuItem[];

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [CommonModule],
  exports: [ContextMenuComponent],
  declarations: [ContextMenuComponent]
})
export class ContextMenuModule { }
