import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { VehicleSecurityService } from '../Services/vehicle-security.service'
@Component({
  selector: 'app-from-to-vehicle',
  templateUrl: './from-to-vehicle.component.html',
  styleUrls: ['./from-to-vehicle.component.css']
})
export class FromToVehicleComponent implements OnInit {
title = 'finderapp';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  daddress: string = "";
  private geoCoder;
  public origin: any
  public destination: any


 
  @ViewChild('search', {static: false})
  public searchElementRef: ElementRef;
 
 
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private dataService: VehicleSecurityService
  ) { }
 
//change marker
public renderOptions = {
  suppressMarkers: true,
}
public markerOptions = {
  origin: {
      
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
    this.getVehicleLocation();
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
 
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
 
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          this.olat = +place.geometry.location.lat();
          this.olng = +place.geometry.location.lng();
          this.origin = { lat: this.olat, lng: this.olng }
        });
      });
    });
  }
 
//get destination from firebase
vehicleData: any;
getVehicleLocation(){
  this.dataService.getData().subscribe(
    data => {
      this.vehicleData = data,
      this.dlat = +this.vehicleData[0].lat,
      this.dlng = +this.vehicleData[0].lng,
      this.destination = { lat: this.dlat, lng: this.dlng }
      this.getAddress(this.dlat, this.dlng)
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






  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        // this.getAddress(this.latitude, this.longitude);

        this.olat = +position.coords.latitude;
        this.olng = +position.coords.longitude;
        this.origin = { lat: this.olat, lng: this.olng }
      });
    }
  }
 
 
  markerDragEnd($event: MouseEvent) {
    document.getElementById("addressSearch").setAttribute("value", "");
    let coords=JSON.stringify($event);
    let coords3=JSON.parse(coords);

    // this.latitude = $event.coords.lat;
    // this.longitude = $event.coords.lng;
    this.latitude = +coords3.lat;
    this.longitude = +coords3.lng;
    this.dgetAddress(this.latitude, this.longitude);
    
    //console.log("end drag");
  }

    setInputField(): void {
    //var copyValue: string = (<HTMLInputElement>document.getElementById("priceInputGlobal")).value;
    //console.log("set calling....");
    //console.log(this.daddress);
    document.getElementById("addressSearch").setAttribute("value", this.daddress);
    }

 
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
 
    });
  }

  //get dragend address
  dgetAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.daddress = results[0].formatted_address;
          //set input text field with address
          //console.log("calling....");
          this.setInputField();
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
 
    });
  }


}
