import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

export type buttonType = 'text-regular-primary' | 'text-regular-secondary' | 'text-small-primary' | 'text-small-secondary';

@Component({
  selector: 'nj-button[type][text]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() disabled: boolean;

  @Input() type: buttonType;

  @Input() text: string;

  @Input() icon: string;

  @Input() isActive: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent],
  declarations: [ButtonComponent]
})
export class ButtonModule { }
