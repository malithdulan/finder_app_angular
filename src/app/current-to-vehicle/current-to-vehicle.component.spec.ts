import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentToVehicleComponent } from './current-to-vehicle.component';

describe('CurrentToVehicleComponent', () => {
  let component: CurrentToVehicleComponent;
  let fixture: ComponentFixture<CurrentToVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentToVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentToVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
