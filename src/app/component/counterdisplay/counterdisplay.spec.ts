import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counterdisplay } from './counterdisplay';

describe('Counterdisplay', () => {
  let component: Counterdisplay;
  let fixture: ComponentFixture<Counterdisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counterdisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Counterdisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
