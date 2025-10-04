import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvilableRidesComponent } from './avilable-rides.component';

describe('AvilableRidesComponent', () => {
  let component: AvilableRidesComponent;
  let fixture: ComponentFixture<AvilableRidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvilableRidesComponent]
    });
    fixture = TestBed.createComponent(AvilableRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
