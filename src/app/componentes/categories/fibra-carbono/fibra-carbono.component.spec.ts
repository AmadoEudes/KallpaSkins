import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibraCarbonoComponent } from './fibra-carbono.component';

describe('FibraCarbonoComponent', () => {
  let component: FibraCarbonoComponent;
  let fixture: ComponentFixture<FibraCarbonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibraCarbonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibraCarbonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
