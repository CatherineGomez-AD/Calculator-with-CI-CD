import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Output() numberEvent = new EventEmitter<string>();
  @Output() operationEvent = new EventEmitter<string>();
  @Output() computeEvent = new EventEmitter<void>();

  appendNumber(number: string): void {
    this.numberEvent.emit(number);
  }

  chooseOperation(operation: string): void {
    this.operationEvent.emit(operation);
  }

  compute(): void {
    this.computeEvent.emit();
  }
}
