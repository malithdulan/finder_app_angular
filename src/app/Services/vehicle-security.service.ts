import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class VehicleSecurityService {

  
  constructor(public db: AngularFireDatabase) { 

  }

  getData(){
    return this.db.list('VehicleTrackingData').valueChanges();
  }

}
