import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvilableRidesComponent } from './Components/avilable-rides/avilable-rides.component';
import { NewRideComponent } from './Components/new-ride/new-ride.component';
import { BookRideComponent } from './Components/book-ride/book-ride.component';

const routes: Routes = [
  {
    path : '',
    component: AvilableRidesComponent
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
