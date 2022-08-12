import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocateVehicleComponent } from './locate-vehicle/locate-vehicle.component';
import { CurrentToVehicleComponent } from './current-to-vehicle/current-to-vehicle.component';
import { FromToVehicleComponent } from './from-to-vehicle/from-to-vehicle.component';

const routes: Routes = [
  { path: 'VehicleLocation', component: LocateVehicleComponent},
  { path: '', redirectTo: '/VehicleLocation', pathMatch: 'full'},
  { path: 'CurrentToVehicle', component: CurrentToVehicleComponent},
  { path: 'FromToVehicle', component: FromToVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
