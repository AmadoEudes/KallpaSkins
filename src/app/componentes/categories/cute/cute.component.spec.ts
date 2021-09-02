import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuteComponent } from './cute.component';

describe('CuteComponent', () => {
  let component: CuteComponent;
  let fixture: ComponentFixture<CuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
