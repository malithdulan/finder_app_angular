import { Component, OnInit } from '@angular/core';

import { VehicleSecurityService } from '../Services/vehicle-security.service'

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent implements OnInit {

  vehicleData: any;
  speed:any;
  sensor1: any;
  sensor2: any;

  constructor(private dataService: VehicleSecurityService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      data => {
        this.vehicleData = data,
        this.speed = this.vehicleData[0].speed,
        this.sensor1 = this.vehicleData[0].s1,
        this.sensor2 = this.vehicleData[0].s2
      },

    )
  }

}
