import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromToVehicleComponent } from './from-to-vehicle.component';

describe('FromToVehicleComponent', () => {
  let component: FromToVehicleComponent;
  let fixture: ComponentFixture<FromToVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromToVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromToVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
