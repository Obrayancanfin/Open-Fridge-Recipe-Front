import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckYourFridgeComponent } from './check-your-fridge.component';

describe('CheckYourFridgeComponent', () => {
  let component: CheckYourFridgeComponent;
  let fixture: ComponentFixture<CheckYourFridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckYourFridgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckYourFridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
