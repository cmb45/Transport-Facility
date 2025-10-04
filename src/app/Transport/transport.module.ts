import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import { NewRideComponent } from './Components/new-ride/new-ride.component';
import { BookRideComponent } from './Components/book-ride/book-ride.component';
import { MaterialModule } from '../Other-Modules/material/material.module';
import { AvailableRidesComponent } from './Components/available-rides/available-rides.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewRideComponent,
    BookRideComponent,
    AvailableRidesComponent
  ],
  imports: [
    CommonModule,
    TransportRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TransportModule { }
