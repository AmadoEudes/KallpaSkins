import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinItemComponent } from './spin-item.component';

describe('SpinItemComponent', () => {
  let component: SpinItemComponent;
  let fixture: ComponentFixture<SpinItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
