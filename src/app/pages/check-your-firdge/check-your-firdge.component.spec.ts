import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckYourFirdgeComponent } from './check-your-firdge.component';

describe('CheckYourFirdgeComponent', () => {
  let component: CheckYourFirdgeComponent;
  let fixture: ComponentFixture<CheckYourFirdgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckYourFirdgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckYourFirdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
