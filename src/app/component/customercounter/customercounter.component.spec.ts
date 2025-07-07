import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercounterComponent } from './customercounter.component';

describe('CustomercounterComponent', () => {
  let component: CustomercounterComponent;
  let fixture: ComponentFixture<CustomercounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomercounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomercounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
