import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetHoldoverComponent } from './sweet-holdover.component';

describe('SweetHoldoverComponent', () => {
  let component: SweetHoldoverComponent;
  let fixture: ComponentFixture<SweetHoldoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetHoldoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetHoldoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
