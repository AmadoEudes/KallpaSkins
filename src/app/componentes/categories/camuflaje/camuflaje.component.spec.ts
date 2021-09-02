import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamuflajeComponent } from './camuflaje.component';

describe('CamuflajeComponent', () => {
  let component: CamuflajeComponent;
  let fixture: ComponentFixture<CamuflajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamuflajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamuflajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
