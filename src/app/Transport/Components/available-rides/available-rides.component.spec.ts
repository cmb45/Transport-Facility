import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableRidesComponent } from './available-rides.component';

describe('AvailableRidesComponent', () => {
  let component: AvailableRidesComponent;
  let fixture: ComponentFixture<AvailableRidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableRidesComponent]
    });
    fixture = TestBed.createComponent(AvailableRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
