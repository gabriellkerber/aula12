import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgModelComponent } from './exemplo-ng-model.component';

describe('ExemploNgModelComponent', () => {
  let component: ExemploNgModelComponent;
  let fixture: ComponentFixture<ExemploNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
