import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateVehicleComponent } from './locate-vehicle.component';

describe('LocateVehicleComponent', () => {
  let component: LocateVehicleComponent;
  let fixture: ComponentFixture<LocateVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
