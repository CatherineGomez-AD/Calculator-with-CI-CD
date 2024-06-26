import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.css']
})
export class ClearButtonComponent {
  @Output() clearEvent = new EventEmitter<void>();

  clear(): void {
    this.clearEvent.emit();
  }
}
