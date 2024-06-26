import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayComponent]
    });
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current input', () => {
    const currentInput = '5';
    component.currentInput = currentInput;
    fixture.detectChanges();
    const displayElement = fixture.nativeElement.querySelector('.display input');
    expect(displayElement.value).toBe(currentInput);
  });
  
});
