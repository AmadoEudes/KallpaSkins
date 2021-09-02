import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexturaComponent } from './textura.component';

describe('TexturaComponent', () => {
  let component: TexturaComponent;
  let fixture: ComponentFixture<TexturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
