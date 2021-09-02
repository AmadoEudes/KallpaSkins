import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittlePetsComponent } from './little-pets.component';

describe('LittlePetsComponent', () => {
  let component: LittlePetsComponent;
  let fixture: ComponentFixture<LittlePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittlePetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittlePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
