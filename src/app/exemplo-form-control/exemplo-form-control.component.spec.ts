import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploFormControlComponent } from './exemplo-form-control.component';

describe('ExemploFormControlComponent', () => {
  let component: ExemploFormControlComponent;
  let fixture: ComponentFixture<ExemploFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
