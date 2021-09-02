import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostedGlitterComponent } from './frosted-glitter.component';

describe('FrostedGlitterComponent', () => {
  let component: FrostedGlitterComponent;
  let fixture: ComponentFixture<FrostedGlitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrostedGlitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostedGlitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
