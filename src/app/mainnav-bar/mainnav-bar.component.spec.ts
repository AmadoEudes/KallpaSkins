import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnavBarComponent } from './mainnav-bar.component';

describe('MainnavBarComponent', () => {
  let component: MainnavBarComponent;
  let fixture: ComponentFixture<MainnavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainnavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainnavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
