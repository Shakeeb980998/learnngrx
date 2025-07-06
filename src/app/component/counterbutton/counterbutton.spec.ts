import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counterbutton } from './counterbutton';

describe('Counterbutton', () => {
  let component: Counterbutton;
  let fixture: ComponentFixture<Counterbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counterbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Counterbutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
