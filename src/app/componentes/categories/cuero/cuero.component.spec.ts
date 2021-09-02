import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CueroComponent } from './cuero.component';

describe('CueroComponent', () => {
  let component: CueroComponent;
  let fixture: ComponentFixture<CueroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CueroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
