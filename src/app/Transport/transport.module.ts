import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import { NewRideComponent } from './Components/new-ride/new-ride.component';
import { BookRideComponent } from './Components/book-ride/book-ride.component';
import { AvilableRidesComponent } from './Components/avilable-rides/avilable-rides.component';


@NgModule({
  declarations: [
    NewRideComponent,
    BookRideComponent,
    AvilableRidesComponent
  ],
  imports: [
    CommonModule,
    TransportRoutingModule
  ]
})
export class TransportModule { }
