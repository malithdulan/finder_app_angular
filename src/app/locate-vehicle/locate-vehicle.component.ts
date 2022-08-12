import { Component, OnInit} from '@angular/core';

import { VehicleSecurityService } from '../Services/vehicle-security.service'




@Component({
  selector: 'app-locate-vehicle',
  templateUrl: './locate-vehicle.component.html',
  styleUrls: ['./locate-vehicle.component.css']
})
export class LocateVehicleComponent implements OnInit {

  vehicleData: any;

  clat = 7.486818;
  clng = 80.627019;

  lat = 7.061414;
  lng = 50.097856;
  // speed:any;
  // sensor1: any;
  // sensor2: any;

  loading: boolean = true;
  



  constructor(private dataService: VehicleSecurityService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      data => {
        this.vehicleData = data,
        this.lat = this.vehicleData[0].lat,
        this.lng = this.vehicleData[0].lng,
        // this.speed = this.vehicleData[0].speed,
        // this.sensor1 = this.vehicleData[0].s1,
        // this.sensor2 = this.vehicleData[0].s2,
        console.log(this.vehicleData[0].lat);
        this.loading = false;
       
      },

    )
    
  }


  

  //marker bounce
  userLocationMarkerAnimation: string;

  mapReading() {
    this.userLocationMarkerAnimation = 'BOUNCE';
  }

  //marker change
  icon = {
    url: 'https://cdn4.iconfinder.com/data/icons/car-service-1/512/park-512.png',
    scaledSize: {
      width: 50,
      height: 50
    }
  }

}
//https://cdn4.iconfinder.com/data/icons/car-service-1/512/park-512.png