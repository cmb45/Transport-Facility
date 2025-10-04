import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRideComponent } from './Components/new-ride/new-ride.component';
import { BookRideComponent } from './Components/book-ride/book-ride.component';
import { AvailableRidesComponent } from './Components/available-rides/available-rides.component';

const routes: Routes = [
  {
    path : '',
    component: AvailableRidesComponent
  },
  {
    path: 'newRide',
    component: NewRideComponent
  },
  {
    path : 'bookRide',
    component: BookRideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
