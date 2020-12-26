import { Component, ElementRef, EventEmitter, HostListener, NgModule, Output } from '@angular/core';

@Component({
  selector: 'nj-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {

  @Output() clickOutside = new EventEmitter();

  constructor(readonly elementRef: ElementRef) { }

  @HostListener('document:mousedown', ['$event']) onMouseEnter(event: Event): void {
    if (!this.elementRef.nativeElement.parentElement.contains(event.target)) {
      this.clickOutside.emit();
    }
  }

}

@NgModule({
  imports: [],
  exports: [OverlayComponent],
  declarations: [OverlayComponent]
})
export class OverlayModule { }
