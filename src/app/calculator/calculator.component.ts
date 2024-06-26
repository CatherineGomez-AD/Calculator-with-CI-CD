import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  currentInput: string = '0';
  previousInput: string = '';
  operation: string | null = null;

  clear(): void {
    this.currentInput = '0';
    this.previousInput = '';
    this.operation = null;
  }

  appendNumber(number: string): void {
    if (this.currentInput === '0' && number !== '.') {
      this.currentInput = number;
    } else {
      this.currentInput += number;
    }
  }

  chooseOperation(operation: string): void {
    if (this.currentInput === '') return;
    if (this.previousInput !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousInput = this.currentInput;
    this.currentInput = '';
  }

  compute(): void {
    let computation: number;
    const prev = parseFloat(this.previousInput);
    const current = parseFloat(this.currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '×':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }

    this.currentInput = computation.toString();
    this.operation = null;
    this.previousInput = '';
  }
}
