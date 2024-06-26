import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsComponent]
    });
    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#appendNumber', () => {
    it('should emit number event', () => {
      const spy = spyOn(component.numberEvent, 'emit');
      const number = '5';
      component.appendNumber(number);
      expect(spy).toHaveBeenCalledWith(number);
    });
  });

  describe('#chooseOperation', () => {
    it('should emit operation event', () => {
      const spy = spyOn(component.operationEvent, 'emit');
      const operation = '+';
      component.chooseOperation(operation);
      expect(spy).toHaveBeenCalledWith(operation);
    });
  });

  describe('#compute', () => {
    it('should emit compute event', () => {
      const spy = spyOn(component.computeEvent, 'emit');
      component.compute();
      expect(spy).toHaveBeenCalled();
    });
  });
  
});
