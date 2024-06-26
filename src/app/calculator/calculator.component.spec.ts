import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { DisplayComponent } from '../display/display.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { ClearButtonComponent } from '../clear-button/clear-button.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorComponent,
        DisplayComponent,
        ButtonsComponent,
        ClearButtonComponent,
      ],
    });

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial values', () => {
    expect(component.currentInput).toBe('0');
    expect(component.previousInput).toBe('');
    expect(component.operation).toBeNull();
  });

  describe('#clear', () => {
    it('should clear all inputs', () => {
      component.currentInput = '5';
      component.previousInput = '10';
      component.operation = '+';
      component.clear();
      expect(component.currentInput).toBe('0');
      expect(component.previousInput).toBe('');
      expect(component.operation).toBeNull();
    });
  });

  describe('#appendNumber', () => {
    it('should append a number to current input', () => {
      component.appendNumber('5');
      expect(component.currentInput).toBe('5');
      component.appendNumber('3');
      expect(component.currentInput).toBe('53');
    });

    it('should handle leading zeros correctly', () => {
      component.currentInput = '0';
      component.appendNumber('5');
      expect(component.currentInput).toBe('5');
    });

    it('should append decimal point correctly', () => {
      component.appendNumber('5');
      component.appendNumber('.');
      component.appendNumber('3');
      expect(component.currentInput).toBe('5.3');
    });
  });

  describe('#chooseOperation', () => {
    it('should set the operation and previous input correctly', () => {
      component.currentInput = '5';
      component.chooseOperation('+');
      expect(component.operation).toBe('+');
      expect(component.previousInput).toBe('5');
      expect(component.currentInput).toBe('');
    });

    it('should compute if previous input is not empty', () => {
      component.currentInput = '5';
      component.previousInput = '10';
      component.operation = '+';
      component.chooseOperation('-');
      expect(component.previousInput).toBe('15');
      expect(component.currentInput).toBe('');
      expect(component.operation).toBe('-');
    });
  });

  describe('#compute', () => {
    it('should perform addition', () => {
      component.previousInput = '10';
      component.currentInput = '5';
      component.operation = '+';
      component.compute();
      expect(component.currentInput).toBe('15');
      expect(component.previousInput).toBe('');
      expect(component.operation).toBeNull();
    });

    it('should perform subtraction', () => {
      component.previousInput = '10';
      component.currentInput = '5';
      component.operation = '-';
      component.compute();
      expect(component.currentInput).toBe('5');
      expect(component.previousInput).toBe('');
      expect(component.operation).toBeNull();
    });

    it('should perform multiplication', () => {
      component.previousInput = '10';
      component.currentInput = '5';
      component.operation = '×';
      component.compute();
      expect(component.currentInput).toBe('50');
      expect(component.previousInput).toBe('');
      expect(component.operation).toBeNull();
    });

    it('should perform division', () => {
      component.previousInput = '10';
      component.currentInput = '2';
      component.operation = '÷';
      component.compute();
      expect(component.currentInput).toBe('5');
      expect(component.previousInput).toBe('');
      expect(component.operation).toBeNull();
    });

    it('should handle division by zero', () => {
      component.previousInput = '10';
      component.currentInput = '0';
      component.operation = '÷';
      component.compute();
      expect(component.currentInput).toBe('Infinity');
      expect(component.previousInput).toBe('');
      expect(component.operation).toBeNull();
    });
  });
});
