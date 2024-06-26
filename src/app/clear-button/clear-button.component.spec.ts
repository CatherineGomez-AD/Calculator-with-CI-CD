import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearButtonComponent } from './clear-button.component';

describe('ClearButtonComponent', () => {
  let component: ClearButtonComponent;
  let fixture: ComponentFixture<ClearButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearButtonComponent]
    });
    fixture = TestBed.createComponent(ClearButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#clear', () => {
    it('should emit clear event', () => {
      const spy = spyOn(component.clearEvent, 'emit');
      component.clear();
      expect(spy).toHaveBeenCalled();
    });
  });
  
});
