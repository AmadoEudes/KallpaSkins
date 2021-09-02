import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmolComponent } from './marmol.component';

describe('MarmolComponent', () => {
  let component: MarmolComponent;
  let fixture: ComponentFixture<MarmolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarmolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarmolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
