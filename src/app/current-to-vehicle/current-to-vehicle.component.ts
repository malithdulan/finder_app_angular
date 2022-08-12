import { Component, OnInit } from '@angular/core';
import { VehicleSecurityService } from '../Services/vehicle-security.service'
@Component({
  selector: 'app-current-to-vehicle',
  templateUrl: './current-to-vehicle.component.html',
  styleUrls: ['./current-to-vehicle.component.css']
})
export class CurrentToVehicleComponent implements OnInit {


  constructor(private dataService: VehicleSecurityService) { }


  title = 'finderapp';
  //public lat: Number = 24.799448
  public lat: Number = 6.954350
//public lng: Number = 120.979021
public lng: Number = 79.876042
public origin: any
public destination: any


//change marker
public renderOptions = {
  suppressMarkers: true,
}

//https://icon-library.net/images/google-maps-person-icon/google-maps-person-icon-6.jpg


public markerOptions = {
  origin: {
      //icon: 'https://www.shareicon.net/data/32x32/2016/04/28/756617_face_512x512.png',
      
      icon:{
        url: 'https://icon-library.net/images/google-maps-person-icon/google-maps-person-icon-6.jpg',
      scaledSize: {
        width: 50,
        height: 50
      },
    },
    draggable: true
  },
  destination: {
      //icon: 'https://www.shareicon.net/data/32x32/2016/04/28/756626_face_512x512.png',
      //label: 'MARKER LABEL',
      //opacity: 0.8,
      
       icon:{
          url: 'https://cdn4.iconfinder.com/data/icons/car-service-1/512/park-512.png',
        scaledSize: {
          width: 50,
          height: 50
        }
      }
      
  },
}



ngOnInit() { 
  // this.getDirection()
  this.setCurrentLocation();
  this.getVehicleLocation()
}

vehicleData: any;

getVehicleLocation(){
  this.dataService.getData().subscribe(
    data => {
      this.vehicleData = data,
      this.dlat = +this.vehicleData[0].lat,
      this.dlng = +this.vehicleData[0].lng,
      this.destination = { lat: this.dlat, lng: this.dlng }
      
    },

  )
}

olat = 6.967985;
olng = 79.893054;

dlat = 6.967985;
dlng = 79.893054;

getDirection() {
  this.origin = { lat: this.olat, lng: this.olng }
  this.destination = { lat: this.dlat, lng: this.dlng }
}


  
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.olat = +position.coords.latitude;
        this.olng = +position.coords.longitude;
        this.origin = { lat: this.olat, lng: this.olng }
      });
    }
  }

}
